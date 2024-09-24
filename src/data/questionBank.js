const questionBank = {
    PHP: [
      // Existing PHP questions...
  
      // Symfony 7.0 PHP Questions
      {
        id: 's7_php1',
        text: 'What feature introduced in PHP 8.2 allows for the deprecation of specific class members?',
        type: 'single',
        options: ['Readonly Properties', 'Deprecation Attributes', 'Disjunctive Normal Form Types', 'Fetch Properties'],
        correctAnswer: 'Deprecation Attributes',
        explanation: 'Deprecation Attributes in PHP 8.2 enable developers to mark specific class members as deprecated, signaling that they should not be used and may be removed in future versions.'
      },
      {
        id: 's7_php2',
        text: 'Which PHP 8.2 feature allows creating enumerated types?',
        type: 'single',
        options: ['Enums', 'Interfaces', 'Traits', 'Classes'],
        correctAnswer: 'Enums',
        explanation: 'Enums, introduced in PHP 8.2, allow developers to define a set of possible values for a type, enhancing type safety and reducing errors.'
      },
      {
        id: 's7_php3',
        text: 'True or False: PHP 8.2 introduced read-only classes that cannot have any properties modified after instantiation.',
        type: 'true_false',
        correctAnswer: 'False',
        explanation: 'PHP 8.2 introduced readonly properties, not entire readonly classes. Readonly properties cannot be modified after initialization, but classes themselves can still have mutable properties.'
      },
      {
        id: 's7_php4',
        text: 'Which of the following is a new string type in PHP 8.2?',
        type: 'multiple',
        options: ['Stringable', 'Sha1', 'DateTimeImmutable', 'MacRae'],
        correctAnswer: ['Stringable'],
        explanation: 'Stringable is an interface introduced in PHP 8.2 that allows objects to be treated as strings when used in string contexts.'
      },
      {
        id: 's7_php5',
        text: 'What is the purpose of the `readonly` keyword introduced in PHP 8.2?',
        type: 'single',
        options: [
          'To make class properties immutable after initialization',
          'To declare methods that cannot be overridden',
          'To define constants within classes',
          'To mark classes as abstract'
        ],
        correctAnswer: 'To make class properties immutable after initialization',
        explanation: 'The `readonly` keyword allows developers to declare properties that can only be set once, typically during object construction, ensuring their immutability thereafter.'
      },
      // Add more PHP 8.2 related questions here
    ],
    
    HTTP: [
      // Existing HTTP questions...
  
      // Symfony 7.0 HTTP Questions
      {
        id: 's7_http1',
        text: 'What HTTP status code indicates that the client must authenticate itself to get the requested response?',
        type: 'single',
        options: ['401 Unauthorized', '403 Forbidden', '404 Not Found', '500 Internal Server Error'],
        correctAnswer: '401 Unauthorized',
        explanation: 'A 401 Unauthorized status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.'
      },
      {
        id: 's7_http2',
        text: 'Which Symfony component is primarily used for making HTTP requests?',
        type: 'single',
        options: ['HttpClient', 'HttpFoundation', 'HttpKernel', 'HttpCache'],
        correctAnswer: 'HttpClient',
        explanation: 'The HttpClient component in Symfony is used to make HTTP requests to other services or APIs, providing a powerful and flexible API for handling such interactions.'
      },
      {
        id: 's7_http3',
        text: 'True or False: In Symfony, the HttpFoundation component replaces the native PHP global variables for handling HTTP requests and responses.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'The HttpFoundation component provides an object-oriented layer over the native PHP globals, offering a more robust and testable way to handle HTTP requests and responses.'
      },
      {
        id: 's7_http4',
        text: 'Which of the following is NOT a valid HTTP request method?',
        type: 'single',
        options: ['GET', 'POST', 'FETCH', 'DELETE'],
        correctAnswer: 'FETCH',
        explanation: 'FETCH is not a standard HTTP request method. The standard methods include GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, and TRACE.'
      },
      {
        id: 's7_http5',
        text: 'When using Symfony HttpClient, which method is used to send a GET request?',
        type: 'single',
        options: ['request()', 'get()', 'fetch()', 'send()'],
        correctAnswer: 'request()',
        explanation: 'The `request()` method of the HttpClient is used to send various types of HTTP requests, including GET, by specifying the method as the first argument.'
      },
      // Add more HTTP related questions here
    ],
  
    SymfonyArchitecture: [
      // Existing Symfony Architecture questions...
  
      // Symfony 7.0 Architecture Questions
      {
        id: 's7_arch1',
        text: 'What is Symfony Flex and what is its primary purpose?',
        type: 'single',
        options: [
          'A templating engine for Symfony applications',
          'A tool to automate the installation and configuration of Symfony bundles',
          'A security component for Symfony',
          'A debugging tool for Symfony developers'
        ],
        correctAnswer: 'A tool to automate the installation and configuration of Symfony bundles',
        explanation: 'Symfony Flex is a composer plugin that automates the installation and configuration of Symfony bundles, making it easier to manage dependencies and setup in Symfony projects.'
      },
      {
        id: 's7_arch2',
        text: 'Which Symfony component is responsible for handling the event system?',
        type: 'single',
        options: ['HttpKernel', 'EventDispatcher', 'Routing', 'Security'],
        correctAnswer: 'EventDispatcher',
        explanation: 'The EventDispatcher component manages the event system in Symfony, allowing different parts of the application to communicate through events and listeners.'
      },
      {
        id: 's7_arch3',
        text: 'True or False: Symfony follows the Microkernel architecture pattern.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony follows the Microkernel architecture pattern, emphasizing minimalism and allowing developers to add functionality through bundles and components as needed.'
      },
      {
        id: 's7_arch4',
        text: 'Which of the following best describes Symfony’s approach to backward compatibility?',
        type: 'single',
        options: [
          'Frequent breaking changes to introduce new features',
          'No focus on backward compatibility',
          'Strict adherence to backward compatibility with deprecation notices for obsolete features',
          'Backward compatibility is maintained only for the latest minor version'
        ],
        correctAnswer: 'Strict adherence to backward compatibility with deprecation notices for obsolete features',
        explanation: 'Symfony maintains strict backward compatibility, providing deprecation notices before removing or changing features, allowing developers to adapt their codebases smoothly.'
      },
      {
        id: 's7_arch5',
        text: 'Which tool does Symfony provide to ensure best practices are followed in a project?',
        type: 'single',
        options: ['Symfony Profiler', 'Symfony Maker Bundle', 'Symfony Insight', 'Symfony CLI'],
        correctAnswer: 'Symfony Insight',
        explanation: 'Symfony Insight is a service that analyzes Symfony projects to ensure best practices are followed, providing feedback and recommendations to improve code quality and performance.'
      },
      // Add more Symfony Architecture related questions here
    ],
  
    Controllers: [
      // Existing Controllers questions...
  
      // Symfony 7.0 Controllers Questions
      {
        id: 's7_ctrl1',
        text: 'Which base class is commonly extended when creating controllers in Symfony?',
        type: 'single',
        options: ['Controller', 'AbstractController', 'BaseController', 'SymfonyController'],
        correctAnswer: 'AbstractController',
        explanation: 'AbstractController provides a base implementation for controllers in Symfony, offering useful helper methods and services that simplify common tasks.'
      },
      {
        id: 's7_ctrl2',
        text: 'How can you add a flash message in a Symfony controller?',
        type: 'single',
        options: [
          '$this->addFlash("notice", "Message")',
          'flash("notice", "Message")',
          '$this->getFlashBag()->add("notice", "Message")',
          'Both A and C'
        ],
        correctAnswer: 'Both A and C',
        explanation: 'Both `$this->addFlash("notice", "Message")` and `$this->getFlashBag()->add("notice", "Message")` are valid ways to add flash messages in Symfony controllers.'
      },
      {
        id: 's7_ctrl3',
        text: 'True or False: In Symfony, controllers are required to return a Response object.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Controllers in Symfony must return a Response object, which represents the HTTP response sent back to the client.'
      },
      {
        id: 's7_ctrl4',
        text: 'Which Symfony feature allows automatic injection of services into controller methods?',
        type: 'single',
        options: ['Service Autowiring', 'Argument Value Resolvers', 'Dependency Injection', 'Event Listeners'],
        correctAnswer: 'Argument Value Resolvers',
        explanation: 'Argument Value Resolvers allow Symfony to automatically inject services and other objects into controller method arguments based on type hints and configuration.'
      },
      {
        id: 's7_ctrl5',
        text: 'What is the purpose of session handling in Symfony controllers?',
        type: 'single',
        options: [
          'To manage user authentication',
          'To store user-specific data across multiple requests',
          'To handle HTTP request parameters',
          'To manage database transactions'
        ],
        correctAnswer: 'To store user-specific data across multiple requests',
        explanation: 'Session handling allows Symfony controllers to store and retrieve user-specific data that persists across multiple HTTP requests, enabling features like user login states and shopping carts.'
      },
      // Add more Controllers related questions here
    ],
  
    Routing: [
      // Existing Routing questions...
  
      // Symfony 7.0 Routing Questions
      {
        id: 's7_route1',
        text: 'In Symfony, which annotation is used to define a route in a controller using attributes?',
        type: 'single',
        options: ['@Route', '#[Route]', '/Route', 'Route()'],
        correctAnswer: '#[Route]',
        explanation: 'In Symfony, attributes are used to define routes with the `#[Route]` syntax, which is a native PHP 8+ feature replacing annotations.'
      },
      {
        id: 's7_route2',
        text: 'Which file format can be used to configure routes in Symfony?',
        type: 'multiple',
        options: ['YAML', 'XML', 'PHP', 'JSON'],
        correctAnswer: ['YAML', 'PHP', 'XML'],
        explanation: 'Symfony supports multiple formats for route configuration, including YAML, PHP, and XML. JSON is not a standard format for Symfony routing configuration.'
      },
      {
        id: 's7_route3',
        text: 'True or False: Symfony routing can perform conditional matching based on host or scheme.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony routing allows conditional matching based on various criteria, including host, scheme, HTTP methods, and more, enabling flexible route definitions.'
      },
      {
        id: 's7_route4',
        text: 'How can you define a route that redirects to another URL in Symfony using PHP attributes?',
        type: 'single',
        options: [
          'Use the RedirectController class',
          'Set the `path` option to the target URL',
          'Use `#[Route("/old", name="old_route", methods=["GET"], redirect="/new")]`',
          'Use the `redirect` option in the Route attribute'
        ],
        correctAnswer: 'Use the `redirect` option in the Route attribute',
        explanation: 'To define a redirect, you can use the `redirect` option within the Route attribute, specifying the target URL to redirect to.'
      },
      {
        id: 's7_route5',
        text: 'Which Symfony feature allows automatic URL parameter decoding and conversion to typed arguments in controller methods?',
        type: 'single',
        options: ['ParamConverter', 'URLMatcher', 'RouteLoader', 'URLDecoder'],
        correctAnswer: 'ParamConverter',
        explanation: 'ParamConverter automatically converts URL parameters to typed arguments in controller methods, simplifying data handling and reducing boilerplate code.'
      },
      // Add more Routing related questions here
    ],
  
    'Templating with Twig': [
      // Existing Twig questions...
  
      // Symfony 7.0 Templating with Twig Questions
      {
        id: 's7_twig1',
        text: 'Which syntax is used to output a variable in Twig?',
        type: 'single',
        options: ['{{ variable }}', '<% variable %>', '[[ variable ]]', '{% variable %}'],
        correctAnswer: '{{ variable }}',
        explanation: 'Twig uses the `{{ }}` syntax to output the value of a variable within templates.'
      },
      {
        id: 's7_twig2',
        text: 'How do you extend a base template in Twig?',
        type: 'single',
        options: [
          '{% include "base.html.twig" %}',
          '{% extends "base.html.twig" %}',
          '{% use "base.html.twig" %}',
          '{% import "base.html.twig" %}'
        ],
        correctAnswer: '{% extends "base.html.twig" %}',
        explanation: 'The `{% extends "base.html.twig" %}` syntax is used to inherit from a base template, allowing the child template to override or add blocks.'
      },
      {
        id: 's7_twig3',
        text: 'True or False: In Twig, filters are used to modify the output of variables.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Filters in Twig are used to modify the output of variables, such as formatting dates, escaping strings, or altering text.'
      },
      {
        id: 's7_twig4',
        text: 'Which Twig tag is used to define a block that can be overridden in child templates?',
        type: 'single',
        options: ['{% block %}', '{% section %}', '{% container %}', '{% layout %}'],
        correctAnswer: '{% block %}',
        explanation: 'The `{% block %}` tag defines a block of content that can be overridden in child templates, facilitating template inheritance.'
      },
      {
        id: 's7_twig5',
        text: 'How can you include a Symfony-specific function in a Twig template?',
        type: 'single',
        options: [
          'Use the `{{ path() }}` function',
          'Use the `{% include %}` tag',
          'Use the `{{ render(controller()) }}` function',
          'Both A and C'
        ],
        correctAnswer: 'Both A and C',
        explanation: 'Symfony provides specific functions like `path()` for generating URLs and `render(controller())` for embedding controller outputs within Twig templates.'
      },
      // Add more Templating with Twig related questions here
    ],
  
    Forms: [
      // Existing Forms questions...
  
      // Symfony 7.0 Forms Questions
      {
        id: 's7_form1',
        text: 'Which Symfony class is commonly used to create a form?',
        type: 'single',
        options: [
          'FormBuilder',
          'FormFactory',
          'FormInterface',
          'AbstractType'
        ],
        correctAnswer: 'AbstractType',
        explanation: 'Forms in Symfony are typically created by extending the `AbstractType` class, which allows developers to define form fields and configuration.'
      },
      {
        id: 's7_form2',
        text: 'True or False: Symfony forms automatically handle CSRF protection.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony forms include built-in CSRF protection by default, helping to prevent cross-site request forgery attacks.'
      },
      {
        id: 's7_form3',
        text: 'Which method is used to handle the submission of a form in a Symfony controller?',
        type: 'single',
        options: [
          'handleRequest()',
          'process()',
          'submit()',
          'validate()'
        ],
        correctAnswer: 'handleRequest()',
        explanation: 'The `handleRequest()` method processes the form submission by binding the request data to the form and validating it.'
      },
      {
        id: 's7_form4',
        text: 'How can you customize the form rendering in Twig?',
        type: 'single',
        options: [
          'By overriding the form template files',
          'By using form themes',
          'By passing custom options to form fields',
          'All of the above'
        ],
        correctAnswer: 'All of the above',
        explanation: 'Form rendering in Twig can be customized by overriding default templates, using form themes for styling, and passing custom options to individual form fields.'
      },
      {
        id: 's7_form5',
        text: 'Which Symfony feature allows you to modify form data before it is displayed or after it is submitted?',
        type: 'single',
        options: [
          'Form Events',
          'Data Transformers',
          'Event Subscribers',
          'All of the above'
        ],
        correctAnswer: 'All of the above',
        explanation: 'Symfony provides Form Events, Data Transformers, and Event Subscribers to modify form data during different stages of the form lifecycle.'
      },
      // Add more Forms related questions here
    ],
  
    'Data Validation': [
      // Existing Data Validation questions...
  
      // Symfony 7.0 Data Validation Questions
      {
        id: 's7_val1',
        text: 'Which annotation is used in Symfony to add validation constraints to an entity property?',
        type: 'single',
        options: ['@Assert', '@Validation', '@Constraints', '@Validate'],
        correctAnswer: '@Assert',
        explanation: 'The `@Assert` annotation is used to apply validation constraints to entity properties in Symfony, ensuring data integrity.'
      },
      {
        id: 's7_val2',
        text: 'True or False: Symfony allows the creation of custom validation constraints.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony supports the creation of custom validation constraints, enabling developers to define bespoke validation logic tailored to specific requirements.'
      },
      {
        id: 's7_val3',
        text: 'Which Symfony component is responsible for handling data validation?',
        type: 'single',
        options: [
          'HttpFoundation',
          'Validator',
          'Form',
          'Security'
        ],
        correctAnswer: 'Validator',
        explanation: 'The Validator component in Symfony is dedicated to handling data validation, providing a robust system for enforcing data integrity through various constraints.'
      },
      {
        id: 's7_val4',
        text: 'What is the purpose of the `ValidatorInterface` in Symfony?',
        type: 'single',
        options: [
          'To validate form submissions',
          'To provide a common interface for different validators',
          'To handle HTTP request validations',
          'To manage security validations'
        ],
        correctAnswer: 'To provide a common interface for different validators',
        explanation: 'The `ValidatorInterface` defines a common interface for validators in Symfony, allowing different validation implementations to be used interchangeably.'
      },
      {
        id: 's7_val5',
        text: 'How can you access validation errors in a Symfony controller after form submission?',
        type: 'single',
        options: [
          'Using `$form->getErrors()`',
          'Using `$form->getViolations()`',
          'Using `$form->isValid()`',
          'Using `$form->getData()`'
        ],
        correctAnswer: '$form->getErrors()',
        explanation: 'After form submission, `$form->getErrors()` can be used to retrieve any validation errors that occurred during the form’s processing.'
      },
      // Add more Data Validation related questions here
    ],
  
    'Dependency Injection': [
      // Existing Dependency Injection questions...
  
      // Symfony 7.0 Dependency Injection Questions
      {
        id: 's7_di1',
        text: 'What is the purpose of the Symfony service container?',
        type: 'single',
        options: [
          'To manage database connections',
          'To handle HTTP requests',
          'To manage object instantiation and dependency injection',
          'To render templates'
        ],
        correctAnswer: 'To manage object instantiation and dependency injection',
        explanation: 'The service container in Symfony manages the instantiation of services and handles dependency injection, ensuring that components receive the dependencies they need.'
      },
      {
        id: 's7_di2',
        text: 'True or False: Symfony supports automatic service registration through autowiring.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony’s autowiring feature allows for automatic service registration by inferring dependencies based on type hints, reducing the need for manual configuration.'
      },
      {
        id: 's7_di3',
        text: 'Which file is primarily used to configure services in Symfony?',
        type: 'single',
        options: [
          'services.yaml',
          'config.yaml',
          'routes.yaml',
          'parameters.yaml'
        ],
        correctAnswer: 'services.yaml',
        explanation: 'The `services.yaml` file is used to configure services in Symfony, defining how they are instantiated and injected throughout the application.'
      },
      {
        id: 's7_di4',
        text: 'What is a compiler pass in Symfony’s Dependency Injection component?',
        type: 'single',
        options: [
          'A process to compile Twig templates',
          'A pass that modifies the service container during the build process',
          'A way to optimize database queries',
          'A debugging tool for services'
        ],
        correctAnswer: 'A pass that modifies the service container during the build process',
        explanation: 'A compiler pass allows developers to modify the service container during the build process, enabling advanced configurations and dynamic service definitions.'
      },
      {
        id: 's7_di5',
        text: 'How can you ensure a service is private and not accessible directly from the container?',
        type: 'single',
        options: [
          'Set `public: false` in the service definition',
          'Do not define the service in `services.yaml`',
          'Use the `private` keyword in the service class',
          'Symfony services are private by default'
        ],
        correctAnswer: 'Set `public: false` in the service definition',
        explanation: 'By setting `public: false` in the service definition, you ensure that the service is private and cannot be accessed directly from the container, promoting better encapsulation.'
      },
      // Add more Dependency Injection related questions here
    ],
  
    Security: [
      // Existing Security questions...
  
      // Symfony 7.0 Security Questions
      {
        id: 's7_sec1',
        text: 'Which Symfony component is responsible for handling authentication?',
        type: 'single',
        options: [
          'SecurityBundle',
          'SecurityCore',
          'SecurityHttp',
          'SecurityGuard'
        ],
        correctAnswer: 'SecurityBundle',
        explanation: 'The SecurityBundle integrates various security components in Symfony, handling authentication, authorization, and other security-related features.'
      },
      {
        id: 's7_sec2',
        text: 'True or False: In Symfony, voters are used to decide whether a user has permission to perform a specific action.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Voters in Symfony are used to make granular authorization decisions, determining if a user has the necessary permissions to perform specific actions.'
      },
      {
        id: 's7_sec3',
        text: 'Which firewall type in Symfony is used for stateless APIs?',
        type: 'single',
        options: [
          'Form Login',
          'Http Basic',
          'Guard',
          'JWT Authentication'
        ],
        correctAnswer: 'JWT Authentication',
        explanation: 'JWT Authentication is commonly used for stateless APIs in Symfony, allowing token-based authentication without maintaining session state.'
      },
      {
        id: 's7_sec4',
        text: 'How can you define user roles in Symfony?',
        type: 'single',
        options: [
          'In the security.yaml file',
          'Using annotations in controllers',
          'Directly in the User entity',
          'All of the above'
        ],
        correctAnswer: 'In the security.yaml file',
        explanation: 'User roles in Symfony are typically defined in the `security.yaml` configuration file, where roles are assigned and hierarchical structures can be established.'
      },
      {
        id: 's7_sec5',
        text: 'What is the purpose of the `PasswordEncoder` in Symfony security?',
        type: 'single',
        options: [
          'To encode passwords before storing them',
          'To decode passwords for authentication',
          'To manage session passwords',
          'To validate password strength'
        ],
        correctAnswer: 'To encode passwords before storing them',
        explanation: 'The `PasswordEncoder` is used to securely encode passwords before they are stored in the database, ensuring that plain-text passwords are never saved.'
      },
      // Add more Security related questions here
    ],
  
    'HTTP Caching': [
      // Existing HTTP Caching questions...
  
      // Symfony 7.0 HTTP Caching Questions
      {
        id: 's7_cache1',
        text: 'Which Symfony component is used to implement HTTP caching?',
        type: 'single',
        options: [
          'HttpCache',
          'CacheComponent',
          'ResponseCache',
          'CachingBundle'
        ],
        correctAnswer: 'HttpCache',
        explanation: 'The `HttpCache` component in Symfony is used to implement HTTP caching, providing mechanisms to cache responses and manage cache headers efficiently.'
      },
      {
        id: 's7_cache2',
        text: 'True or False: Symfony supports ESI (Edge Side Includes) for HTTP caching.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony supports ESI, which allows for caching parts of a page separately, providing more granular and efficient caching strategies.'
      },
      {
        id: 's7_cache3',
        text: 'Which HTTP header is used to specify the maximum age a response can be cached?',
        type: 'single',
        options: [
          'Cache-Control: max-age',
          'Expires',
          'ETag',
          'Last-Modified'
        ],
        correctAnswer: 'Cache-Control: max-age',
        explanation: '\`Cache-Control: max-age\` specifies the maximum amount of time a response is considered fresh, determining how long it can be cached before requiring a new request.'
      },
      {
        id: 's7_cache4',
        text: 'How can you programmatically set caching headers in a Symfony controller?',
        type: 'single',
        options: [
          'Using the Response object\'s `setPublic()` and `setMaxAge()` methods',
          'Directly modifying the `security.yaml` file',
          'Using annotations in the controller',
          'Caching headers cannot be set programmatically'
        ],
        correctAnswer: 'Using the Response object\'s `setPublic()` and `setMaxAge()` methods',
        explanation: 'In Symfony controllers, you can set caching headers by calling methods like `setPublic()` and `setMaxAge()` on the Response object to control cache behavior.'
      },
      {
        id: 's7_cache5',
        text: 'Which technique can be used in Symfony to validate cached responses based on content changes?',
        type: 'single',
        options: [
          'ETags',
          'Sessions',
          'Flash Messages',
          'Cookies'
        ],
        correctAnswer: 'ETags',
        explanation: 'ETags (Entity Tags) are used to validate cached responses by comparing the current ETag of the resource with the one provided by the client, ensuring content changes are accurately reflected.'
      },
      // Add more HTTP Caching related questions here
    ],
  
    Console: [
      // Existing Console questions...
  
      // Symfony 7.0 Console Questions
      {
        id: 's7_console1',
        text: 'Which Symfony command is used to create a new console command?',
        type: 'single',
        options: [
          'php bin/console generate:command',
          'php bin/console make:command',
          'php bin/console create:command',
          'php bin/console new:command'
        ],
        correctAnswer: 'php bin/console make:command',
        explanation: 'The `make:command` command is used to generate a new console command in Symfony, providing a starting point for custom CLI operations.'
      },
      {
        id: 's7_console2',
        text: 'True or False: Console commands in Symfony must return an integer status code.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony console commands should return an integer status code, where `0` typically indicates success and non-zero values indicate various error states.'
      },
      {
        id: 's7_console3',
        text: 'How can you access input arguments in a Symfony console command?',
        type: 'single',
        options: [
          'Using `$this->arguments()`',
          'Using `$input->getArgument("name")`',
          'Using `$this->getArguments()`',
          'Using `$this->getInput("name")`'
        ],
        correctAnswer: 'Using `$input->getArgument("name")`',
        explanation: 'Input arguments in Symfony console commands can be accessed using the `$input->getArgument("name")` method, allowing you to retrieve the values passed by the user.'
      },
      {
        id: 's7_console4',
        text: 'Which method is used to define the configuration of a Symfony console command?',
        type: 'single',
        options: [
          'configure()',
          'initialize()',
          'setup()',
          'build()'
        ],
        correctAnswer: 'configure()',
        explanation: 'The `configure()` method is used to define the name, description, arguments, and options for a Symfony console command.'
      },
      {
        id: 's7_console5',
        text: 'What is the purpose of events in Symfony console commands?',
        type: 'single',
        options: [
          'To handle user input more efficiently',
          'To allow executing code before and after a command runs',
          'To manage command dependencies',
          'To improve command testing'
        ],
        correctAnswer: 'To allow executing code before and after a command runs',
        explanation: 'Events in Symfony console commands enable the execution of additional code at specific points in the command lifecycle, such as before or after the command runs.'
      },
      // Add more Console related questions here
    ],
  
    'Automated Tests': [
      // Existing Automated Tests questions...
  
      // Symfony 7.0 Automated Tests Questions
      {
        id: 's7_test1',
        text: 'Which testing framework is commonly used with Symfony for automated testing?',
        type: 'single',
        options: [
          'Behat',
          'PHPUnit',
          'Codeception',
          'PHPSpec'
        ],
        correctAnswer: 'PHPUnit',
        explanation: 'PHPUnit is the most commonly used testing framework with Symfony, providing robust tools for unit and functional testing.'
      },
      {
        id: 's7_test2',
        text: 'True or False: Symfony provides built-in support for creating functional tests.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'Symfony offers built-in support for creating functional tests, allowing developers to test the entire application stack, including HTTP requests and responses.'
      },
      {
        id: 's7_test3',
        text: 'How can you boot the Symfony kernel in a PHPUnit test?',
        type: 'single',
        options: [
          '$this->createKernel()->boot()',
          '$this->bootSymfony()',
          '$kernel = new Kernel(); $kernel->boot();',
          'Symfony does not require booting the kernel in tests'
        ],
        correctAnswer: '$this->createKernel()->boot()',
        explanation: 'In PHPUnit tests, the Symfony kernel can be booted using `$this->createKernel()->boot()`, which initializes the application environment for testing.'
      },
      {
        id: 's7_test4',
        text: 'Which trait can be used in Symfony tests to make HTTP requests?',
        type: 'single',
        options: [
          'HttpClientTrait',
          'ClientTrait',
          'BrowserKitTrait',
          'TestTrait'
        ],
        correctAnswer: 'ClientTrait',
        explanation: 'The `ClientTrait` provides methods for making HTTP requests within Symfony tests, facilitating interaction with the application\'s controller actions.'
      },
      {
        id: 's7_test5',
        text: 'What is the purpose of fixtures in Symfony tests?',
        type: 'single',
        options: [
          'To define test routes',
          'To preload data into the database for testing',
          'To create mock services',
          'To configure test environments'
        ],
        correctAnswer: 'To preload data into the database for testing',
        explanation: 'Fixtures are used to load predefined data into the database, ensuring a consistent state for tests and enabling reliable and repeatable test scenarios.'
      },
      // Add more Automated Tests related questions here
    ],
  
    Miscellaneous: [
      // Existing Miscellaneous questions...
  
      // Symfony 7.0 Miscellaneous Questions
      {
        id: 's7_misc1',
        text: 'Which Symfony component is used for sending emails?',
        type: 'single',
        options: [
          'Mailer',
          'SwiftMailer',
          'MailComponent',
          'Emailer'
        ],
        correctAnswer: 'Mailer',
        explanation: 'The Mailer component in Symfony is used for sending emails, providing a simple and flexible API for email management.'
      },
      {
        id: 's7_misc2',
        text: 'True or False: Symfony Messenger component can be used for handling asynchronous tasks.',
        type: 'true_false',
        correctAnswer: 'True',
        explanation: 'The Messenger component facilitates handling asynchronous tasks by allowing message dispatching and processing through queues.'
      },
      {
        id: 's7_misc3',
        text: 'Which Symfony component provides locking mechanisms to prevent race conditions?',
        type: 'single',
        options: [
          'Lock',
          'Mutex',
          'Semaphore',
          'Concurrency'
        ],
        correctAnswer: 'Lock',
        explanation: 'The Lock component provides mechanisms to create locks, preventing race conditions and ensuring that critical sections of code are not executed concurrently by multiple processes.'
      },
      {
        id: 's7_misc4',
        text: 'How does Symfony handle internationalization (i18n)?',
        type: 'single',
        options: [
          'Using the Translation component',
          'Using the Locale component',
          'Using the International component',
          'Symfony does not support i18n'
        ],
        correctAnswer: 'Using the Translation component',
        explanation: 'Symfony uses the Translation component to manage internationalization, allowing developers to translate application messages and support multiple languages.'
      },
      {
        id: 's7_misc5',
        text: 'What tool does Symfony provide for profiling and debugging applications?',
        type: 'single',
        options: [
          'Symfony Profiler',
          'Symfony Debugger',
          'Symfony Logger',
          'Symfony Inspector'
        ],
        correctAnswer: 'Symfony Profiler',
        explanation: 'The Symfony Profiler is a powerful tool that collects and displays detailed information about each request, aiding in debugging and performance optimization.'
      },
      // Add more Miscellaneous related questions here
    ],
  
    // Add more topics and questions here
  };
  
  export default questionBank;