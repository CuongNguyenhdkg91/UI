//UX for the waiting time of Dang Tai ... no need for server, cache 1 use 1 million
// there is exception when show image of last row

'use client'
import { News } from '@/Writing/News01';

const NewsPage = () =>{
  return (
  <div id="main" className="bg-[#212e3a] text-white flex flex-row justify-between gap-3 flex-wrap">
    <div className="w-[360px] pb-[200px] bg-[aquamarine]">left sidebar

    </div>

    <div className="w-3/5 md:w-full">
      <News
      title = 'Python'
      subtitle='Flask'
      figures={['https://cdn.hackersandslackers.com/2020/02/flask-intro.jpg']}
      writing='📍 A Flask application is an instance of the Flask class. Everything about the application, such as configuration and URLs, will be registered with this class.
    The most straightforward way to create a Flask application is to create a global Flask instance directly at the top of your code, like how the “Hello, World!” example did on the previous page. While this is simple and useful in some cases, it can cause some tricky issues as the project grows.
      📢  Instead of creating a Flask instance globally, you will create it inside a function. This function is known as the application factory. Any configuration, registration, and other setup the application needs will happen inside the function, then the application will be returned.📍'
     />

      {/* <News
      title = 'Java'
      subtitle='Spring'
      figures={['https://i.ytimg.com/vi/yxMQPmmb-EQ/hq720.jpg']}
      writing='🌱 The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform.
      A key element of Spring is infrastructural support at the application level: Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.
      🪴 Features
      Core technologies: dependency injection, events, resources, i18n, validation, data binding, type conversion, SpEL, AOP.
      
      Testing: mock objects, TestContext framework, Spring MVC Test, WebTestClient.
      
      Data Access: transactions, DAO support, JDBC, ORM, Marshalling XML.
      
      Spring MVC and Spring WebFlux web frameworks.
      
      Integration: remoting, JMS, JCA, JMX, email, tasks, scheduling, cache and observability.
      
      Languages: Kotlin, Groovy, dynamic languages.📍'
     /> */}
    </div>
    <div className="max-w-[250px] flex-grow bg-[bisque]">right side bar</div>
  </div>
)}

export default NewsPage


