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
        
        article_content[title] = p_content

    except Exception as e:
        print("Error:", e)


# Print the hashmap containing news article titles and links
for title, link in news_articles.items():
    print(f"{title}: {link}")

# Print the hashmap containing article content
for title, content in article_content.items():
    print(f"{title} Content: {content}")
