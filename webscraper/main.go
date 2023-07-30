package main

import (
	"github.com/gocolly/colly"
)

func main(){

	c:= colly.NewCollector(colly.AllowedDomains("https://www.canada.ca"))
	c.OnHTML("a[href]", func(e *colly.HTMLElement) {
		
	})

	c.Visit("https://www.canada.ca/en/department-finance/news.html")


}