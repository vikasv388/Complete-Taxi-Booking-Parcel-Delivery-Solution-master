import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumExample 

    public static void main(String[] args) 

        // Create Chrome browser
        WebDriver driver = new ChromeDriver();

        // Open website
        driver.get("https://www.google.com");

        // Maximize browser
        driver.manage().window().maximize();

        // Find search box and enter text
        driver.findElement(By.name("q")).sendKeys("Selenium Java");

        // Press Enter
        driver.findElement(By.name("q")).submit();

        // Print page title
        System.out.println("Page Title: " + driver.getTitle());

        // Close browser
        driver.quit();
    }
}
