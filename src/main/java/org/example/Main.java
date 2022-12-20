package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello world!");
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.get("https://mvnrepository.com/artifact/io.github.bonigarcia/webdrivermanager/5.3.1");
        System.out.println("Hello world!");  //online changes
    }
    
    

}
