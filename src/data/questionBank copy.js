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
    // New Symfony 7.0 PHP Questions
    {
      id: 's7_php6',
      text: 'Which PHP 8.2 feature allows for the use of enums with backed values?',
      type: 'single',
      options: ['Pure Enums', 'Backed Enums', 'Enum Classes', 'Enum Traits'],
      correctAnswer: 'Backed Enums',
      explanation: 'Backed Enums in PHP 8.2 allow enums to have scalar values (like strings or integers), enabling easier integration with databases and external systems.'
    },
    {
      id: 's7_php7',
      text: 'True or False: PHP 8.2 introduced the `readonly` class modifier, making all properties of a class immutable.',
      type: 'true_false',
      correctAnswer: 'False',
      explanation: 'PHP 8.2 introduced the `readonly` keyword for individual properties, not for entire classes. This allows for selective immutability of certain properties.'
    },
    {
      id: 's7_php8',
      text: 'What is the purpose of the `Disjunctive Normal Form Types` feature introduced in PHP 8.2?',
      type: 'single',
      options: [
        'To simplify logical expressions in code',
        'To enable more precise type declarations using logical OR',
        'To enhance array handling capabilities',
        'To improve performance of type checking'
      ],
      correctAnswer: 'To enable more precise type declarations using logical OR',
      explanation: 'Disjunctive Normal Form Types allow developers to declare complex type conditions using logical ORs, enabling more precise and flexible type definitions.'
    },
    {
      id: 's7_php9',
      text: 'Which of the following best describes traits in PHP?',
      type: 'single',
      options: [
        'A mechanism for code reuse in single inheritance languages',
        'A design pattern for managing object creation',
        'A way to define abstract classes',
        'A tool for dependency injection'
      ],
      correctAnswer: 'A mechanism for code reuse in single inheritance languages',
      explanation: 'Traits allow developers to reuse sets of methods freely in several classes, providing a way to compose classes horizontally.'
    },
    // Add more PHP 8.2 related questions here up to 20 per topic
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
    // New Symfony 7.0 HTTP Questions
    {
      id: 's7_http6',
      text: 'Which Symfony HttpClient feature allows retrying failed requests automatically?',
      type: 'single',
      options: ['RetryStrategy', 'Automatic Retries', 'Circuit Breaker', 'Failure Handler'],
      correctAnswer: 'RetryStrategy',
      explanation: 'RetryStrategy in Symfony HttpClient allows developers to define rules for automatically retrying failed HTTP requests based on specific conditions.'
    },
    {
      id: 's7_http7',
      text: 'True or False: Symfony HttpClient can handle asynchronous requests using promises.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony HttpClient supports asynchronous requests by returning promises, allowing non-blocking HTTP operations and improved performance.'
    },
    {
      id: 's7_http8',
      text: 'What is the default timeout for HTTP requests made using Symfony HttpClient?',
      type: 'single',
      options: ['10 seconds', '30 seconds', '60 seconds', 'No timeout'],
      correctAnswer: '30 seconds',
      explanation: 'By default, Symfony HttpClient sets the timeout for HTTP requests to 30 seconds, after which the request will fail if no response is received.'
    },
    {
      id: 's7_http9',
      text: 'Which method in Symfony HttpClient is used to stream responses?',
      type: 'single',
      options: ['stream()', 'getStream()', 'openStream()', 'createStream()'],
      correctAnswer: 'stream()',
      explanation: 'The `stream()` method allows developers to iterate over the response stream, handling data as it arrives without waiting for the entire response.'
    },
    {
      id: 's7_http10',
      text: 'Which Symfony HttpClient option allows setting custom headers for a request?',
      type: 'single',
      options: ['headers', 'custom_headers', 'setHeaders', 'http_headers'],
      correctAnswer: 'headers',
      explanation: 'The `headers` option is used to pass custom HTTP headers when making a request with Symfony HttpClient.'
    },
    // Add more HTTP related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Architecture Questions
    {
      id: 's7_arch6',
      text: 'How does Symfony Flex affect the structure of a Symfony project?',
      type: 'single',
      options: [
        'It enforces a monolithic structure',
        'It allows for modular inclusion of components and bundles',
        'It replaces the need for Composer',
        'It limits the project to use only Symfony-specific libraries'
      ],
      correctAnswer: 'It allows for modular inclusion of components and bundles',
      explanation: 'Symfony Flex promotes a modular structure by enabling the easy inclusion and configuration of needed components and bundles, enhancing flexibility and scalability.'
    },
    {
      id: 's7_arch7',
      text: 'True or False: Symfony components can be used independently of the Symfony framework.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony components are decoupled and can be used independently in any PHP project, not just within the Symfony framework.'
    },
    {
      id: 's7_arch8',
      text: 'Which Symfony feature ensures that new features adhere to best practices before being merged?',
      type: 'single',
      options: ['Symfony Checker', 'Symfony Validator', 'Symfony Quality Gate', 'Symfony Contributor Guidelines'],
      correctAnswer: 'Symfony Quality Gate',
      explanation: 'Symfony Quality Gate involves automated checks and reviews to ensure that new features and contributions adhere to established best practices and standards.'
    },
    {
      id: 's7_arch9',
      text: 'What is the role of bridges in Symfony architecture?',
      type: 'single',
      options: [
        'They provide direct extensions to the core framework',
        'They allow Symfony components to integrate with third-party libraries',
        'They manage the application's database connections',
        'They handle user authentication'
      ],
      correctAnswer: 'They allow Symfony components to integrate with third-party libraries',
      explanation: 'Bridges in Symfony act as adapters that enable Symfony components to work seamlessly with various third-party libraries, enhancing interoperability.'
    },
    {
      id: 's7_arch10',
      text: 'Which Symfony feature helps manage different environments (e.g., development, production) within the application?',
      type: 'single',
      options: ['Environment Manager', 'Configuration Profiles', 'Environment Variables', 'Kernel Environments'],
      correctAnswer: 'Environment Variables',
      explanation: 'Symfony uses environment variables to manage different environments, allowing configuration settings to vary based on the current environment (e.g., development, production).'
    },
    // Add more Symfony Architecture related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Controllers Questions
    {
      id: 's7_ctrl6',
      text: 'How can you restrict a controller action to only respond to POST requests using annotations?',
      type: 'single',
      options: [
        'Use @Method("POST") annotation above the action',
        'Use #[Route(methods: ["POST"])] attribute above the action',
        'Check the request method within the action and throw an exception if not POST',
        'All of the above'
      ],
      correctAnswer: 'Use #[Route(methods: ["POST"])] attribute above the action',
      explanation: 'Using the `#[Route(methods: ["POST"])]` attribute restricts the controller action to only handle POST requests at the routing level, ensuring proper HTTP method handling.'
    },
    {
      id: 's7_ctrl7',
      text: 'True or False: Symfony controllers can utilize constructor injection for dependencies.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony supports constructor injection in controllers, allowing dependencies to be injected through the controller\'s constructor, promoting better separation of concerns and testability.'
    },
    {
      id: 's7_ctrl8',
      text: 'Which method in AbstractController can be used to redirect to a specific route?',
      type: 'single',
      options: [
        '$this->redirectToRoute()',
        '$this->redirect()',
        '$this->routeRedirect()',
        '$this->sendRedirect()'
      ],
      correctAnswer: '$this->redirectToRoute()',
      explanation: '$this->redirectToRoute() is a helper method provided by AbstractController to redirect users to a specific route defined in the routing configuration.'
    },
    {
      id: 's7_ctrl9',
      text: 'What is the primary purpose of Argument Value Resolvers in Symfony controllers?',
      type: 'single',
      options: [
        'To validate request data',
        'To automatically convert request data into PHP objects',
        'To handle session management',
        'To manage HTTP responses'
      ],
      correctAnswer: 'To automatically convert request data into PHP objects',
      explanation: 'Argument Value Resolvers automatically convert request data into PHP objects based on type hints, simplifying the process of handling request parameters and dependencies in controller methods.'
    },
    {
      id: 's7_ctrl10',
      text: 'How can you access the current user within a Symfony controller?',
      type: 'single',
      options: [
        '$this->getUser()',
        '$this->currentUser()',
        '$this->user',
        'Access via the security service only'
      ],
      correctAnswer: '$this->getUser()',
      explanation: '$this->getUser() is a method provided by AbstractController that retrieves the currently authenticated user, leveraging Symfony\'s security mechanisms.'
    },
    // Add more Controllers related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Routing Questions
    {
      id: 's7_route6',
      text: 'Which option allows defining a route with a default value for a URL parameter in Symfony YAML routing?',
      type: 'single',
      options: [
        'defaults: { parameter: "value" }',
        'default_values: { parameter: "value" }',
        'parameters: { parameter: "value" }',
        'values: { parameter: "value" }'
      ],
      correctAnswer: 'defaults: { parameter: "value" }',
      explanation: 'In Symfony YAML routing, you can set default values for URL parameters using the `defaults` key, ensuring that if the parameter is not provided, it defaults to the specified value.'
    },
    {
      id: 's7_route7',
      text: 'True or False: Symfony routing supports localization by allowing different routes for different locales.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony routing supports localization by enabling the definition of different routes for different locales, allowing applications to serve content in multiple languages seamlessly.'
    },
    {
      id: 's7_route8',
      text: 'How can you generate a URL for a specific route programmatically in Symfony?',
      type: 'single',
      options: [
        'Using the `url()` function in Twig templates',
        'Using the `generateUrl()` method in the controller',
        'Using the `Router::generate()` static method',
        'Both A and B'
      ],
      correctAnswer: 'Both A and B',
      explanation: 'URLs can be generated in Twig templates using the `url()` function and within controllers using the `generateUrl()` method, providing flexibility in different contexts.'
    },
    {
      id: 's7_route9',
      text: 'Which option allows restricting a route to only accept requests with a specific HTTP method in Symfony PHP attribute routing?',
      type: 'single',
      options: [
        'methods',
        'httpMethods',
        'allowedMethods',
        'requestMethods'
      ],
      correctAnswer: 'methods',
      explanation: 'In Symfony PHP attribute routing, the `methods` option is used to specify which HTTP methods a route should respond to, such as GET, POST, etc.'
    },
    {
      id: 's7_route10',
      text: 'What is the purpose of the `schemes` option in Symfony routing configuration?',
      type: 'single',
      options: [
        'To define URL schemes like HTTP or HTTPS',
        'To set the character encoding for URLs',
        'To specify the API version in URLs',
        'To manage multi-domain routing'
      ],
      correctAnswer: 'To define URL schemes like HTTP or HTTPS',
      explanation: 'The `schemes` option in Symfony routing allows developers to restrict routes to specific URL schemes, such as HTTP or HTTPS, enhancing security and request handling.'
    },
    // Add more Routing related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Templating with Twig Questions
    {
      id: 's7_twig6',
      text: 'Which Twig function is used to include another template and render its content?',
      type: 'single',
      options: [
        'include()',
        'embed()',
        'render()',
        'import()'
      ],
      correctAnswer: 'include()',
      explanation: 'The `include()` function in Twig allows you to include and render the content of another template within the current template.'
    },
    {
      id: 's7_twig7',
      text: 'True or False: Twig allows the use of macros to reuse template code.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Twig macros are reusable pieces of template code, similar to functions in programming languages, allowing developers to encapsulate and reuse code snippets within templates.'
    },
    {
      id: 's7_twig8',
      text: 'How can you apply multiple filters to a single variable in Twig?',
      type: 'single',
      options: [
        '{{ variable | filter1 & filter2 }}',
        '{{ variable | filter1, filter2 }}',
        '{{ variable | filter1 | filter2 }}',
        '{{ variable | [filter1, filter2] }}'
      ],
      correctAnswer: '{{ variable | filter1 | filter2 }}',
      explanation: 'In Twig, multiple filters can be applied in a chain by separating them with the `|` symbol, allowing each filter to process the output of the previous one.'
    },
    {
      id: 's7_twig9',
      text: 'Which Twig tag is used to execute arbitrary PHP code within a template?',
      type: 'single',
      options: [
        '{% php %}',
        '{% code %}',
        '{% set %}',
        'Twig does not support executing arbitrary PHP code within templates'
      ],
      correctAnswer: 'Twig does not support executing arbitrary PHP code within templates',
      explanation: 'Twig is designed to be a secure and clean templating language that does not allow the execution of arbitrary PHP code within templates, promoting best practices and separation of concerns.'
    },
    {
      id: 's7_twig10',
      text: 'What feature does Twig offer to prevent Cross-Site Scripting (XSS) attacks by default?',
      type: 'single',
      options: [
        'Automatic URL encoding',
        'Automatic HTML escaping',
        'Input validation',
        'Session management'
      ],
      correctAnswer: 'Automatic HTML escaping',
      explanation: 'Twig automatically escapes HTML by default, ensuring that variables output in templates are safely rendered and mitigating the risk of XSS attacks.'
    },
    // Add more Templating with Twig related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Forms Questions
    {
      id: 's7_form6',
      text: 'What is the purpose of the `createFormBuilder()` method in Symfony forms?',
      type: 'single',
      options: [
        'To render the form in a template',
        'To initialize a FormBuilder object for programmatically building forms',
        'To handle form submission',
        'To validate form data'
      ],
      correctAnswer: 'To initialize a FormBuilder object for programmatically building forms',
      explanation: 'The `createFormBuilder()` method initializes a FormBuilder object, allowing developers to programmatically add fields and configure the form structure.'
    },
    {
      id: 's7_form7',
      text: 'True or False: Symfony forms require a separate controller action for handling each form field.',
      type: 'true_false',
      correctAnswer: 'False',
      explanation: 'Symfony forms manage multiple fields within a single form object, allowing all fields to be handled within a single controller action without needing separate actions for each field.'
    },
    {
      id: 's7_form8',
      text: 'Which method in a Symfony form type is used to configure form fields?',
      type: 'single',
      options: [
        'buildForm()',
        'configure()',
        'setFields()',
        'initFields()'
      ],
      correctAnswer: 'buildForm()',
      explanation: 'The `buildForm()` method is where developers add and configure form fields when creating a custom form type by extending `AbstractType`.'
    },
    {
      id: 's7_form9',
      text: 'What is the role of Data Transformers in Symfony forms?',
      type: 'single',
      options: [
        'To validate form data',
        'To convert data between different formats',
        'To handle form submissions',
        'To render form fields'
      ],
      correctAnswer: 'To convert data between different formats',
      explanation: 'Data Transformers are used to convert data between the format used in the form and the format used in the underlying data model, facilitating data consistency and integrity.'
    },
    {
      id: 's7_form10',
      text: 'How can you add a custom validation constraint to a Symfony form field?',
      type: 'single',
      options: [
        'By using the `constraints` option when defining the field',
        'By manually checking the field value in the controller',
        'By extending the form type and overriding the validation method',
        'Symfony does not support custom validation constraints'
      ],
      correctAnswer: 'By using the `constraints` option when defining the field',
      explanation: 'Custom validation constraints can be added by specifying the `constraints` option when defining a form field, allowing for tailored validation logic.'
    },
    // Add more Forms related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Data Validation Questions
    {
      id: 's7_val6',
      text: 'Which constraint ensures that a string property is not blank and has a minimum length in Symfony?',
      type: 'single',
      options: [
        'NotBlank and Length',
        'Required and MinLength',
        'NotNull and MinSize',
        'IsNotEmpty and MinLength'
      ],
      correctAnswer: 'NotBlank and Length',
      explanation: 'The `NotBlank` constraint ensures that a value is not blank, and the `Length` constraint can enforce a minimum length, both commonly used together for string validations.'
    },
    {
      id: 's7_val7',
      text: 'True or False: Symfony\'s Validator component can be used independently of the Form component.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony\'s Validator component is decoupled and can be utilized independently of the Form component, allowing for standalone data validation use cases.'
    },
    {
      id: 's7_val8',
      text: 'What is the purpose of the `UniqueEntity` constraint in Symfony?',
      type: 'single',
      options: [
        'To ensure a field is unique within the entity',
        'To make an entire entity unique in the database',
        'To enforce uniqueness across multiple entities',
        'To validate unique email addresses only'
      ],
      correctAnswer: 'To ensure a field is unique within the entity',
      explanation: 'The `UniqueEntity` constraint ensures that a particular field (or set of fields) is unique within the database, preventing duplicate entries for that entity.'
    },
    {
      id: 's7_val9',
      text: 'Which Symfony feature allows loading localized validation messages?',
      type: 'single',
      options: [
        'Translation component',
        'Localization component',
        'Internationalization component',
        'Message Loader'
      ],
      correctAnswer: 'Translation component',
      explanation: 'The Translation component in Symfony allows developers to load and manage localized validation messages, enabling multilingual support for validation errors.'
    },
    {
      id: 's7_val10',
      text: 'How can you group validation constraints in Symfony to apply them selectively?',
      type: 'single',
      options: [
        'Using validation groups',
        'Using constraint sets',
        'Applying conditional constraints',
        'Grouping is not supported'
      ],
      correctAnswer: 'Using validation groups',
      explanation: 'Validation groups allow developers to categorize constraints and apply them selectively, providing flexibility in how and when different validation rules are enforced.'
    },
    // Add more Data Validation related questions here up to approx 5-6 per topic
  ],

  Dependency Injection: [
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
    // New Symfony 7.0 Dependency Injection Questions
    {
      id: 's7_di6',
      text: 'Which feature allows Symfony to automatically inject services based on type hints without manual configuration?',
      type: 'single',
      options: [
        'Autoconfiguration',
        'Autowiring',
        'Service Tagging',
        'Service Decoration'
      ],
      correctAnswer: 'Autowiring',
      explanation: 'Autowiring enables Symfony to automatically inject services into classes based on type hints, eliminating the need for explicit service definitions for common dependencies.'
    },
    {
      id: 's7_di7',
      text: 'True or False: Compiler passes are executed during the runtime of a Symfony application.',
      type: 'true_false',
      correctAnswer: 'False',
      explanation: 'Compiler passes are executed during the build phase of the Symfony container, before the application handles requests, allowing for modification and optimization of service definitions.'
    },
    {
      id: 's7_di8',
      text: 'How can you alias a service in Symfony to provide an alternative name for it?',
      type: 'single',
      options: [
        'Use the `alias` key in `services.yaml`',
        'Create a new service definition with the same class',
        'Use the `aliasService()` method in the container',
        'Aliases are not supported in Symfony'
      ],
      correctAnswer: 'Use the `alias` key in `services.yaml`',
      explanation: 'Aliases can be created in `services.yaml` using the `alias` key, allowing services to be referenced by alternative names within the application.'
    },
    {
      id: 's7_di9',
      text: 'Which Symfony component provides the Dependency Injection Container?',
      type: 'single',
      options: [
        'HttpFoundation',
        'HttpKernel',
        'DependencyInjection',
        'Routing'
      ],
      correctAnswer: 'DependencyInjection',
      explanation: 'The DependencyInjection component in Symfony provides the service container that manages service instantiation and dependency injection throughout the application.'
    },
    {
      id: 's7_di10',
      text: 'What is the benefit of using private services in Symfony?',
      type: 'single',
      options: [
        'They consume less memory',
        'They can be accessed globally',
        'They enforce better encapsulation by restricting access to internal services',
        'They load faster'
      ],
      correctAnswer: 'They enforce better encapsulation by restricting access to internal services',
      explanation: 'Private services restrict direct access, promoting encapsulation and preventing unintended interactions between different parts of the application.'
    },
    // Add more Dependency Injection related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Security Questions
    {
      id: 's7_sec6',
      text: 'Which Symfony security component manages access control based on user roles and permissions?',
      type: 'single',
      options: [
        'AuthorizationChecker',
        'AccessManager',
        'RoleManager',
        'PermissionChecker'
      ],
      correctAnswer: 'AuthorizationChecker',
      explanation: 'The `AuthorizationChecker` component allows Symfony to determine if the current user has the necessary permissions or roles to perform specific actions.'
    },
    {
      id: 's7_sec7',
      text: 'True or False: Symfony\'s Security component can handle OAuth2 authentication natively without third-party bundles.',
      type: 'true_false',
      correctAnswer: 'False',
      explanation: 'While Symfony\'s Security component is highly flexible, handling OAuth2 authentication typically requires third-party bundles or custom implementations to manage the OAuth2 flow.'
    },
    {
      id: 's7_sec8',
      text: 'How can you protect a Symfony controller action to ensure only authenticated users can access it?',
      type: 'single',
      options: [
        'By adding `@Secure` annotation',
        'By configuring access control in `security.yaml`',
        'By checking `$this->getUser()` in the controller',
        'All of the above'
      ],
      correctAnswer: 'By configuring access control in `security.yaml`',
      explanation: 'Configuring access control rules in `security.yaml` is the standard way to restrict access to controller actions based on authentication and roles.'
    },
    {
      id: 's7_sec9',
      text: 'Which Symfony security feature allows defining rules to determine if a user can edit a specific resource?',
      type: 'single',
      options: [
        'Access Control Lists',
        'Voters',
        'Firewalls',
        'Encoders'
      ],
      correctAnswer: 'Voters',
      explanation: 'Voters are used in Symfony to make fine-grained authorization decisions, determining if a user has the rights to perform specific actions on resources.'
    },
    {
      id: 's7_sec10',
      text: 'What is the role of the `UserProviderInterface` in Symfony security?',
      type: 'single',
      options: [
        'To provide user authentication tokens',
        'To load user data from a data source',
        'To manage user sessions',
        'To encode user passwords'
      ],
      correctAnswer: 'To load user data from a data source',
      explanation: '`UserProviderInterface` is responsible for retrieving user data from various sources (e.g., databases, APIs) and supplying it to the security system for authentication and authorization.'
    },
    // Add more Security related questions here up to approx 5-6 per topic
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
      explanation: `'Cache-Control: max-age` specifies the maximum amount of time a response is considered fresh, determining how long it can be cached before requiring a new request.'
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
    // New Symfony 7.0 HTTP Caching Questions
    {
      id: 's7_cache6',
      text: 'Which Symfony feature allows splitting cache for public and private content?',
      type: 'single',
      options: [
        'CacheFamilies',
        'PrivateCache',
        'Cache Tags',
        'Public and Private Cache Control'
      ],
      correctAnswer: 'Public and Private Cache Control',
      explanation: 'Symfony\'s Cache Control allows developers to specify whether content is public or private, enabling appropriate caching strategies for different types of content.'
    },
    {
      id: 's7_cache7',
      text: 'True or False: Symfony HttpCache can be extended to support custom caching strategies.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony HttpCache is highly extensible, allowing developers to implement custom caching strategies by overriding default behaviors and handling specific caching scenarios.'
    },
    {
      id: 's7_cache8',
      text: 'What is the primary benefit of using Vary headers in Symfony HTTP responses?',
      type: 'single',
      options: [
        'To specify the maximum cache age',
        'To control which headers affect cacheability',
        'To indicate which headers should trigger a cache refresh',
        'To define alternative content types'
      ],
      correctAnswer: 'To control which headers affect cacheability',
      explanation: 'Vary headers inform caches which request headers should be considered when determining if a cached response is suitable for a request, ensuring the correct content is served.'
    },
    {
      id: 's7_cache9',
      text: 'Which Symfony component integrates with CDNs (Content Delivery Networks) to enhance HTTP caching?',
      type: 'single',
      options: [
        'HttpClient',
        'ResponseCache',
        'CDNAdapter',
        'HttpCache'
      ],
      correctAnswer: 'HttpCache',
      explanation: '`HttpCache` can be configured to work with CDNs, leveraging their caching capabilities to deliver content more efficiently to end-users globally.'
    },
    {
      id: 's7_cache10',
      text: 'How can you invalidate cached content in Symfony when underlying data changes?',
      type: 'single',
      options: [
        'Manually clearing the cache directory',
        'Using cache invalidation strategies like ESI or Cache Tags',
        'Restarting the Symfony application',
        'Cache cannot be invalidated once set'
      ],
      correctAnswer: 'Using cache invalidation strategies like ESI or Cache Tags',
      explanation: 'Cache invalidation strategies such as ESI and Cache Tags allow Symfony to intelligently determine when cached content should be refreshed based on data changes.'
    },
    // Add more HTTP Caching related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Console Questions
    {
      id: 's7_console6',
      text: 'Which method do you override to perform actions after the command\'s execute method in Symfony?',
      type: 'single',
      options: [
        'finish()',
        'postExecute()',
        'afterExecute()',
        'configure()'
      ],
      correctAnswer: 'finish()',
      explanation: 'The `finish()` method can be overridden to perform actions after the command\'s `execute()` method has completed, allowing for cleanup or additional processing.'
    },
    {
      id: 's7_console7',
      text: 'True or False: Symfony\'s Console component supports dependency injection for commands.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony\'s Console component allows commands to receive dependencies via constructor injection, promoting better code organization and testability.'
    },
    {
      id: 's7_console8',
      text: 'How can you define a hidden argument in a Symfony console command?',
      type: 'single',
      options: [
        'Set the argument as hidden in `configure()` method',
        'Prefix the argument name with an underscore',
        'Use the `setHidden(true)` method on the argument',
        'Symfony does not support hidden arguments'
      ],
      correctAnswer: 'Set the argument as hidden in `configure()` method',
      explanation: 'You can define a hidden argument by setting the `hidden` option to `true` when configuring the argument in the `configure()` method.'
    },
    {
      id: 's7_console9',
      text: 'Which event can you listen to in Symfony Console to run code before any command is executed?',
      type: 'single',
      options: [
        'ConsoleCommandEvent',
        'ConsoleTerminateEvent',
        'ConsoleInitializeEvent',
        'ConsoleStartEvent'
      ],
      correctAnswer: 'ConsoleInitializeEvent',
      explanation: 'The `ConsoleInitializeEvent` is dispatched before any command is executed, allowing listeners to perform actions or modify the input/output before the command runs.'
    },
    {
      id: 's7_console10',
      text: 'What Symfony service can be used to retrieve the application\'s current environment within a console command?',
      type: 'single',
      options: [
        'kernel.environment',
        'app.environment',
        'environment.current',
        'security.token_storage'
      ],
      correctAnswer: 'kernel.environment',
      explanation: 'The `kernel.environment` parameter holds the current environment (e.g., dev, prod) and can be retrieved within console commands to adjust behavior accordingly.'
    },
    // Add more Console related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Automated Tests Questions
    {
      id: 's7_test6',
      text: 'Which PHPUnit method is used to assert that two values are equal?',
      type: 'single',
      options: [
        'assertSame()',
        'assertEquals()',
        'assertTrue()',
        'assertContains()'
      ],
      correctAnswer: 'assertEquals()',
      explanation: '`assertEquals()` is used to verify that two values are equal, allowing for relaxed comparison which does not require identical types.'
    },
    {
      id: 's7_test7',
      text: 'True or False: Symfony\'s WebTestCase class is used for creating unit tests.',
      type: 'true_false',
      correctAnswer: 'False',
      explanation: 'Symfony\'s WebTestCase is designed for functional tests that interact with the application\'s HTTP layer, not for unit tests which typically focus on individual classes or methods.'
    },
    {
      id: 's7_test8',
      text: 'How can you simulate a form submission in a Symfony functional test?',
      type: 'single',
      options: [
        'By using `$client->submit()` with form data',
        'By manually setting POST data in the request',
        'By calling the controller method directly',
        'By using the FormBuilder in the test'
      ],
      correctAnswer: 'By using `$client->submit()` with form data',
      explanation: 'In functional tests, `$client->submit()` is used to simulate form submissions by providing the necessary form data, replicating user interactions.'
    },
    {
      id: 's7_test9',
      text: 'Which PHPUnit annotation is used to denote a method as a test case?',
      type: 'single',
      options: [
        '@TestMethod',
        '@TestCase',
        '@Test',
        'No annotation is required'
      ],
      correctAnswer: '@Test',
      explanation: 'The `@Test` annotation is used to indicate that a method within a PHPUnit test class is a test case that should be executed.'
    },
    {
      id: 's7_test10',
      text: 'What is the role of the `KernelTestCase` class in Symfony testing?',
      type: 'single',
      options: [
        'To facilitate functional testing with a booted kernel',
        'To provide tools for mocking services',
        'To run performance tests',
        'To handle database migrations during tests'
      ],
      correctAnswer: 'To facilitate functional testing with a booted kernel',
      explanation: '`KernelTestCase` allows tests to boot the Symfony kernel, providing access to services and the application environment for comprehensive functional testing.'
    },
    // Add more Automated Tests related questions here up to approx 5-6 per topic
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
    // New Symfony 7.0 Miscellaneous Questions
    {
      id: 's7_misc6',
      text: 'Which Symfony component is used to handle background jobs and message queues?',
      type: 'single',
      options: [
        'Messenger',
        'Queue',
        'Background',
        'Jobs'
      ],
      correctAnswer: 'Messenger',
      explanation: 'The Messenger component in Symfony facilitates handling background jobs and message queues, allowing for asynchronous processing and decoupled architecture.'
    },
    {
      id: 's7_misc7',
      text: 'True or False: Symfony provides a built-in mechanism for rate limiting API requests.',
      type: 'true_false',
      correctAnswer: 'True',
      explanation: 'Symfony includes rate limiting capabilities through its RateLimiter component, enabling developers to control the rate of API requests and enhance security.'
    },
    {
      id: 's7_misc8',
      text: 'How can you implement localization of URLs in Symfony?',
      type: 'single',
      options: [
        'Using route locale prefixes',
        'Setting the locale in the URL parameters',
        'Leveraging the Translation component with routing',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Localization of URLs in Symfony can be achieved by using route locale prefixes, setting locale parameters in URLs, and integrating the Translation component with routing configurations.'
    },
    {
      id: 's7_misc9',
      text: 'Which Symfony component aids in creating and managing cron tasks?',
      type: 'single',
      options: [
        'Scheduler',
        'CronManager',
        'Messenger',
        'Scheduler Bundle'
      ],
      correctAnswer: 'Scheduler Bundle',
      explanation: 'While Symfony does not have a built-in Scheduler component, the Scheduler Bundle can be used to create and manage cron tasks within a Symfony application.'
    },
    {
      id: 's7_misc10',
      text: 'What is the purpose of the Symfony UID component?',
      type: 'single',
      options: [
        'To generate unique identifiers',
        'To handle user IDs',
        'To manage entity uniqueness',
        'To encode user sessions'
      ],
      correctAnswer: 'To generate unique identifiers',
      explanation: 'The UID component in Symfony provides tools for generating unique identifiers such as UUIDs and ULIDs, ensuring the uniqueness of entities and resources across the application.'
    },
    // Add more Miscellaneous related questions here up to approx 5-6 per topic
  ],

  // Add more topics and questions here
};

export default questionBank;