import json
import subprocess
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

news_articles = {}
article_content = {}

# chrome_options = Options()
# chrome_options.add_argument("--headless")
# options=chrome_options

driver = webdriver.Chrome()

driver.get("https://www.canada.ca/en/department-finance/news/news-releases.html")

# Initial scrape of the news pages
try:
    # Wait for the articles to load (adjust timeout as needed)
    wait = WebDriverWait(driver, 10)
    articles = wait.until(EC.visibility_of_all_elements_located((By.CSS_SELECTOR, "ul.feeds-cont li a[href]")))

    # Once the articles are loaded and visible, you can proceed with extracting their data
    for article in articles:
        title = article.text
        link = article.get_attribute("href")
        news_articles[title] = link

except Exception as e:
    print("Error:", e)


# Scrape every article
for title, link in news_articles.items():
    driver.get(link)
    try:
        wait = WebDriverWait(driver, 10)
        div_cmp_text = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "div.cmp-text")))
        
        # Find all <p> tags within the div with class cmp-text
        paragraphs = div_cmp_text.find_elements(By.TAG_NAME, "p")
    
        # Iterate through the found <p> tags and extract their text
        p_content = "\n".join(paragraph.text for paragraph in paragraphs)
        
        # Store both the content and link in the article_content hashmap
        article_content[title] = {"content": p_content, "link": link}

    except Exception as e:
        print("Error:", e)

# Combine all data into a JSON array
articles_data = []
for title, data in article_content.items():
    article_data = {
        "title": title,
        "content": data["content"],
        "link": data["link"]
    }
    articles_data.append(article_data)

# Convert the JSON array to a JSON-formatted string
json_string = json.dumps(articles_data, indent=2)

# Print the JSON-formatted string
print(json_string)

# Save the JSON data to a file
with open("articles_data.json", "w") as json_file:
    json.dump(articles_data, json_file, indent=2)



# Close the webdriver
driver.quit()

subprocess.run(["./server"])
