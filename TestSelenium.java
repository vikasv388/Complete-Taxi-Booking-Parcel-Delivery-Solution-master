import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class GoogleSearchTest {

    public static void main(String[] args) {

        // Start Chrome browser
        WebDriver driver = new ChromeDriver();

        // Open Google
        driver.get("https://www.google.com");

        // Maximize browser
        driver.manage().window().maximize();

        // Find search box
        WebElement searchBox = driver.findElement(By.name("q"));

        // Enter search text
        searchBox.sendKeys("Java Selenium");

        // Press Enter
        searchBox.submit();

        // Print page title
        System.out.println("Page Title: " + driver.getTitle());

        // Close browser
        driver.quit();
    }
}
