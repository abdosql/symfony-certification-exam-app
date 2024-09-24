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
      explanation: 'Deprecation Attributes in PHP 8.2 enable developers to mark specific class members as deprecated, signaling that they should not be used and may be removed in future versions.',
      difficulty: 'medium'
    },
    {
      id: 's7_php2',
      text: 'PHP 8.2 introduced read-only classes that cannot have any properties modified after instantiation.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'PHP 8.2 introduced readonly properties, not entire readonly classes. Readonly properties cannot be modified after initialization, but classes themselves can still have mutable properties.',
      difficulty: 'easy'
    },
    {
      id: 's7_php3',
      text: 'Which of the following are new features in PHP 8.2? (Select all that apply)',
      type: 'multiple',
      options: ['Readonly Classes', 'Disjunctive Normal Form Types', 'Fetch Properties', 'Stringable Interface'],
      correctAnswer: ['Disjunctive Normal Form Types', 'Readonly Classes'],
      explanation: 'PHP 8.2 introduced Disjunctive Normal Form Types and Readonly Classes as new features, enhancing type safety and immutability in PHP applications.',
      difficulty: 'hard'
    },
    {
      id: 's7_php4',
      text: 'Which of the following are new features in PHP 8.2? (Select all that apply)',
      type: 'multiple',
      options: ['Readonly Classes', 'Disjunctive Normal Form Types', 'Fetch Properties', 'Stringable Interface'],
      correctAnswer: ['Disjunctive Normal Form Types', 'Readonly Classes'],
      explanation: 'PHP 8.2 introduced Disjunctive Normal Form Types and Readonly Classes as new features, enhancing type safety and immutability in PHP applications.',
      difficulty: 'hard'
    },
    // ... other PHP questions ...
  ],

  'PHP API up to PHP 8.2 version': [
    {
      id: 's7_phpapi1',
      text: 'PHP 8.2 introduced the "readonly" keyword. What does it signify when used with a class property?',
      type: 'single',
      options: ['The property can only be read within the class.', 'The property cannot be modified after initialization.', 'The property is hidden from child classes.', 'The property is deprecated.'],
      correctAnswer: 'The property cannot be modified after initialization.',
      explanation: 'The "readonly" keyword in PHP 8.2 ensures that a property can only be assigned once, typically during initialization, and cannot be altered thereafter.',
      difficulty: 'medium'
    },
    {
      id: 's7_phpapi2',
      text: 'True or False: PHP 8.2 allows for the use of Disjunctive Normal Form (DNF) types in type declarations.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'PHP 8.2 introduced Disjunctive Normal Form (DNF) types, allowing for more complex type declarations using combinations of union and intersection types.',
      difficulty: 'hard'
    },
    {
      id: 's7_phpapi3',
      text: 'Which of the following are valid type declarations introduced in PHP 8.2? (Select all that apply)',
      type: 'multiple',
      options: ['Union Types', 'Intersection Types', 'Disjunctive Normal Form Types', 'Nullable Types'],
      correctAnswer: ['Union Types', 'Intersection Types', 'Disjunctive Normal Form Types', 'Nullable Types'],
      explanation: 'PHP 8.2 supports Union Types, Intersection Types, Disjunctive Normal Form Types, and Nullable Types, providing greater flexibility and precision in type declarations.',
      difficulty: 'medium'
    },
    {
      id: 's7_phpapi4',
      text: 'What is the purpose of Fetch Properties in PHP 8.2?',
      type: 'single',
      options: [
        'To automatically fetch data from a database.',
        'To lazily load properties when they are accessed.',
        'To retrieve properties from parent classes.',
        'To fetch properties from external APIs.'
      ],
      correctAnswer: 'To lazily load properties when they are accessed.',
      explanation: 'Fetch Properties in PHP 8.2 allow for the lazy loading of class properties, meaning they are only initialized and loaded into memory when accessed, improving performance.',
      difficulty: 'hard'
    },
    // ... more PHP API questions ...
  ],

  'Object Oriented Programming': [
    {
      id: 's7_oop1',
      text: 'In Symfony, which keyword is used to inherit methods and properties from a parent class?',
      type: 'single',
      options: ['implements', 'extends', 'use', 'trait'],
      correctAnswer: 'extends',
      explanation: 'The "extends" keyword is used in PHP to create a class that inherits methods and properties from a parent class, facilitating code reuse and polymorphism.',
      difficulty: 'easy'
    },
    {
      id: 's7_oop2',
      text: 'True or False: An abstract class in PHP can be instantiated directly.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'Abstract classes cannot be instantiated directly. They are intended to be subclassed, and any abstract methods within them must be implemented by the child classes.',
      difficulty: 'easy'
    },
    {
      id: 's7_oop3',
      text: 'Which of the following are characteristics of Object-Oriented Programming? (Select all that apply)',
      type: 'multiple',
      options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Procedural Execution'],
      correctAnswer: ['Encapsulation', 'Inheritance', 'Polymorphism'],
      explanation: 'Encapsulation, Inheritance, and Polymorphism are core principles of Object-Oriented Programming, enabling modularity, code reuse, and flexibility.',
      difficulty: 'medium'
    },
    {
      id: 's7_oop4',
      text: 'Which design pattern is primarily used to create objects without specifying the exact class of the object to be created?',
      type: 'single',
      options: ['Singleton', 'Factory', 'Observer', 'Decorator'],
      correctAnswer: 'Factory',
      explanation: 'The Factory design pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.',
      difficulty: 'medium'
    },
    {
      id: 's7_oop5',
      text: 'What is the main advantage of using interfaces in PHP?',
      type: 'single',
      options: [
        'They allow multiple inheritances.',
        'They provide a way to implement polymorphism.',
        'They can contain method implementations.',
        'They restrict access to class properties.'
      ],
      correctAnswer: 'They provide a way to implement polymorphism.',
      explanation: 'Interfaces define a contract that implementing classes must follow, allowing different classes to be treated uniformly and enabling polymorphic behavior.',
      difficulty: 'medium'
    },
    // ... more OOP questions ...
  ],

  Namespaces: [
    {
      id: 's7_ns1',
      text: 'What is the primary purpose of namespaces in PHP?',
      type: 'single',
      options: [
        'To organize code into logical groups.',
        'To handle HTTP requests.',
        'To manage database connections.',
        'To define global variables.'
      ],
      correctAnswer: 'To organize code into logical groups.',
      explanation: 'Namespaces in PHP are used to encapsulate related classes, interfaces, functions, and constants, preventing naming collisions and improving code organization.',
      difficulty: 'easy'
    },
    {
      id: 's7_ns2',
      text: 'True or False: In PHP, you can declare multiple namespaces within a single file.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'PHP allows multiple namespaces to be declared within a single file, enabling the organization of different logical groups of code in one place.',
      difficulty: 'easy'
    },
    {
      id: 's7_ns3',
      text: 'Which statement correctly imports the "Router" class from the "Symfony\Component\Routing" namespace?',
      type: 'single',
      options: [
        'use Symfony\Component\Routing\Router;',
        '#include Symfony\Component\Routing\Router;',
        'import Router from Symfony\Component\Routing;',
        'namespace Router = Symfony\Component\Routing;'
      ],
      correctAnswer: 'use Symfony\Component\Routing\Router;',
      explanation: 'The "use" statement is used in PHP to import classes from namespaces, allowing you to reference them without needing to specify the full namespace each time.',
      difficulty: 'medium'
    },
    {
      id: 's7_ns4',
      text: 'Which of the following are valid ways to reference a fully qualified class name in PHP? (Select all that apply)',
      type: 'multiple',
      options: [
        '\\App\\Controller\\DefaultController',
        'App\Controller\DefaultController',
        '/App/Controller/DefaultController',
        'App::Controller::DefaultController'
      ],
      correctAnswer: ['\\App\\Controller\\DefaultController', 'App\Controller\DefaultController'],
      explanation: 'In PHP, fully qualified class names can be referenced using backslashes "\\" as namespace separators or without the leading backslash when used in the correct context.',
      difficulty: 'hard'
    },
    {
      id: 's7_ns5',
      text: 'What will be the output of the following PHP code?\n\n```php\nnamespace MyApp;\nclass Test {}\n\n$class = new \MyApp\Test();\nvar_dump($class instanceof Test);\n```',
      type: 'single',
      options: ['bool(true)', 'bool(false)', 'Error', 'null'],
      correctAnswer: 'bool(true)',
      explanation: 'The code creates a new instance of \MyApp\Test and checks if it is an instance of Test within the same namespace, which returns true.',
      difficulty: 'hard'
    },
    // ... more Namespaces questions ...
  ],

  Interfaces: [
    {
      id: 's7_interface1',
      text: 'Which keyword is used in PHP to implement an interface in a class?',
      type: 'single',
      options: ['implements', 'extends', 'uses', 'includes'],
      correctAnswer: 'implements',
      explanation: 'The "implements" keyword is used in PHP when a class wants to adhere to an interface, ensuring it defines all the methods declared in the interface.',
      difficulty: 'easy'
    },
    {
      id: 's7_interface2',
      text: 'True or False: An interface in PHP can contain method implementations.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'Interfaces in PHP can only declare method signatures without providing their implementations. Classes implementing the interface must define the methods.',
      difficulty: 'easy'
    },
    {
      id: 's7_interface3',
      text: 'Which of the following are benefits of using interfaces in PHP? (Select all that apply)',
      type: 'multiple',
      options: [
        'Promote code reusability',
        'Ensure consistent method signatures across classes',
        'Allow multiple inheritances of classes',
        'Facilitate polymorphism'
      ],
      correctAnswer: ['Ensure consistent method signatures across classes', 'Facilitate polymorphism'],
      explanation: 'Interfaces ensure that implementing classes adhere to specific method signatures, enabling polymorphic behavior. They do not inherently promote code reusability or allow multiple inheritances of classes.',
      difficulty: 'medium'
    },
    {
      id: 's7_interface4',
      text: 'Can a PHP interface extend multiple other interfaces?',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'In PHP, an interface can extend multiple other interfaces, allowing it to inherit method signatures from all of them.',
      difficulty: 'medium'
    },
    {
      id: 's7_interface5',
      text: 'What will happen if a class in PHP does not implement all the methods defined in its interface?',
      type: 'single',
      options: [
        'The class will automatically implement the missing methods.',
        'A fatal error will occur.',
        'The class will be considered abstract.',
        'Nothing will happen; the missing methods are optional.'
      ],
      correctAnswer: 'A fatal error will occur.',
      explanation: 'If a class declares that it implements an interface but fails to define all of the interface’s methods, PHP will throw a fatal error, preventing the class from being instantiated.',
      difficulty: 'hard'
    },
    // ... more Interfaces questions ...
  ],

  'Anonymous functions and closures': [
    {
      id: 's7_afc1',
      text: 'What is a closure in PHP?',
      type: 'single',
      options: [
        'A named function defined within a class.',
        'An anonymous function that can capture variables from its surrounding scope.',
        'A function that returns another function.',
        'A deprecated PHP feature.'
      ],
      correctAnswer: 'An anonymous function that can capture variables from its surrounding scope.',
      explanation: 'A closure in PHP is an anonymous function that can capture and use variables from the scope in which it was defined, allowing for more flexible and functional programming patterns.',
      difficulty: 'easy'
    },
    {
      id: 's7_afc2',
      text: 'True or False: In PHP, closures can access and modify variables from the parent scope without any restrictions.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'Closures can access variables from the parent scope if they are explicitly passed using the "use" keyword. However, they cannot modify those variables unless they are passed by reference.',
      difficulty: 'medium'
    },
    {
      id: 's7_afc3',
      text: 'Which keyword is used to pass a variable by reference into a PHP closure?',
      type: 'single',
      options: ['use', 'with', 'by', 'ref'],
      correctAnswer: 'use',
      explanation: 'The "use" keyword is used in PHP closures to inherit variables from the parent scope. To pass by reference, an ampersand "&" is used before the variable name within the use statement.',
      difficulty: 'medium'
    },
    {
      id: 's7_afc4',
      text: 'Which of the following are advantages of using anonymous functions and closures in PHP? (Select all that apply)',
      type: 'multiple',
      options: [
        'Encapsulation of functionality',
        'Reduction of global variables',
        'Enhanced performance',
        'Ease of defining callback functions'
      ],
      correctAnswer: ['Encapsulation of functionality', 'Reduction of global variables', 'Ease of defining callback functions'],
      explanation: 'Anonymous functions and closures help encapsulate functionality, reduce the reliance on global variables, and make it easier to define inline callback functions. They do not inherently enhance performance.',
      difficulty: 'medium'
    },
    {
      id: 's7_afc5',
      text: 'What will the following PHP code output?\n\n```php\n$message = "Hello";\n$closure = function() use ($message) {\n    echo $message;\n};\n$message = "Hi";\n$closure();\n```',
      type: 'single',
      options: ['Hello', 'Hi', 'Error', 'Nothing'],
      correctAnswer: 'Hello',
      explanation: 'The closure captures the value of $message at the time it is defined, which is "Hello". Changes to $message after the closure is defined do not affect the captured value.',
      difficulty: 'hard'
    },
    // ... more Anonymous functions and closures questions ...
  ],

  'Abstract classes': [
    {
      id: 's7_abstract1',
      text: 'What is the main difference between an abstract class and an interface in PHP?',
      type: 'single',
      options: [
        'Abstract classes cannot have properties.',
        'Interfaces can contain method implementations.',
        'Abstract classes can have both implemented and abstract methods.',
        'Interfaces cannot be inherited.'
      ],
      correctAnswer: 'Abstract classes can have both implemented and abstract methods.',
      explanation: 'Unlike interfaces, abstract classes can contain both concrete (implemented) methods and abstract methods that must be defined by child classes.',
      difficulty: 'medium'
    },
    {
      id: 's7_abstract2',
      text: 'True or False: You can instantiate an abstract class in PHP.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'Abstract classes cannot be instantiated directly. They are meant to be extended by other classes that implement the abstract methods.',
      difficulty: 'easy'
    },
    {
      id: 's7_abstract3',
      text: 'Which of the following statements are true about abstract classes in PHP? (Select all that apply)',
      type: 'multiple',
      options: [
        'They can contain abstract methods.',
        'They can be inherited by concrete classes.',
        'They can implement interfaces.',
        'They cannot have constructors.'
      ],
      correctAnswer: ['They can contain abstract methods.', 'They can be inherited by concrete classes.', 'They can implement interfaces.'],
      explanation: 'Abstract classes can contain abstract methods, be inherited by concrete classes, and implement interfaces. They can also have constructors.',
      difficulty: 'medium'
    },
    {
      id: 's7_abstract4',
      text: 'What will happen if a concrete class in PHP does not implement all abstract methods of its parent abstract class?',
      type: 'single',
      options: [
        'The missing methods will be automatically implemented.',
        'A fatal error will occur.',
        'The class will be considered abstract.',
        'Nothing, the class will function normally.'
      ],
      correctAnswer: 'A fatal error will occur.',
      explanation: 'If a concrete class does not implement all abstract methods from its parent abstract class, PHP will throw a fatal error, preventing the class from being used.',
      difficulty: 'hard'
    },
    {
      id: 's7_abstract5',
      text: 'Can an abstract class in PHP contain properties?',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Abstract classes in PHP can contain properties, which can be used by both the abstract class and any subclasses.',
      difficulty: 'easy'
    },
    // ... more Abstract classes questions ...
  ],

  'Exception and error handling': [
    {
      id: 's7_eh1',
      text: 'Which keyword is used to catch exceptions in PHP?',
      type: 'single',
      options: ['catch', 'try', 'throw', 'finally'],
      correctAnswer: 'catch',
      explanation: 'The "catch" keyword is used in PHP to handle exceptions that are thrown within a try block.',
      difficulty: 'easy'
    },
    {
      id: 's7_eh2',
      text: 'True or False: In PHP, all errors are automatically converted to exceptions.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'By default, PHP does not convert all errors to exceptions. However, you can set an error handler or use the ErrorException class to achieve this behavior.',
      difficulty: 'medium'
    },
    {
      id: 's7_eh3',
      text: 'Which of the following are ways to handle exceptions in PHP? (Select all that apply)',
      type: 'multiple',
      options: [
        'Using try and catch blocks',
        'Using error_reporting() function',
        'Implementing a custom exception handler',
        'Ignoring them as they cannot be handled'
      ],
      correctAnswer: ['Using try and catch blocks', 'Implementing a custom exception handler'],
      explanation: 'Exceptions in PHP can be handled using try and catch blocks or by implementing a custom exception handler. The error_reporting() function is related to error level reporting, not exception handling.',
      difficulty: 'medium'
    },
    {
      id: 's7_eh4',
      text: 'What is the purpose of the "finally" block in PHP exception handling?',
      type: 'single',
      options: [
        'To execute code only if an exception is thrown.',
        'To execute code regardless of whether an exception was thrown or not.',
        'To catch specific types of exceptions.',
        'To rethrow an exception.'
      ],
      correctAnswer: 'To execute code regardless of whether an exception was thrown or not.',
      explanation: 'The "finally" block in PHP is used to execute code that should run regardless of whether an exception was thrown or caught, typically for cleanup operations.',
      difficulty: 'medium'
    },
    {
      id: 's7_eh5',
      text: 'Which of the following exception classes in PHP are part of the SPL (Standard PHP Library)? (Select all that apply)',
      type: 'multiple',
      options: [
        'RuntimeException',
        'LogicException',
        'InvalidArgumentException',
        'CustomException'
      ],
      correctAnswer: ['RuntimeException', 'LogicException', 'InvalidArgumentException'],
      explanation: 'RuntimeException, LogicException, and InvalidArgumentException are part of the SPL in PHP. CustomException would need to be defined by the user.',
      difficulty: 'hard'
    },
    // ... more Exception and error handling questions ...
  ],

  Traits: [
    {
      id: 's7_traits1',
      text: 'What is the primary purpose of traits in PHP?',
      type: 'single',
      options: [
        'To enable multiple inheritances',
        'To define abstract methods',
        'To encapsulate reusable methods',
        'To implement interfaces'
      ],
      correctAnswer: 'To encapsulate reusable methods',
      explanation: 'Traits in PHP are used to group reusable methods that can be included within multiple classes, promoting code reuse without the need for inheritance.',
      difficulty: 'easy'
    },
    {
      id: 's7_traits2',
      text: 'True or False: A class in PHP can use multiple traits.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'PHP allows a class to use multiple traits, enabling it to incorporate methods from various sources.',
      difficulty: 'easy'
    },
    {
      id: 's7_traits3',
      text: 'Which of the following can traits in PHP contain? (Select all that apply)',
      type: 'multiple',
      options: [
        'Properties',
        'Methods',
        'Constants',
        'Constructors'
      ],
      correctAnswer: ['Properties', 'Methods', 'Constants'],
      explanation: 'Traits in PHP can contain properties, methods, and constants. They can have constructors, but it is not recommended as it can lead to conflicts when used in classes.',
      difficulty: 'medium'
    },
    {
      id: 's7_traits4',
      text: 'What will happen if two traits used in the same class have methods with the same name?',
      type: 'single',
      options: [
        'PHP will throw a fatal error.',
        'The method from the first trait will be used.',
        'The method from the second trait will overwrite the first.',
        'You must resolve the conflict using the "insteadof" operator.'
      ],
      correctAnswer: 'You must resolve the conflict using the "insteadof" operator.',
      explanation: 'When two traits have methods with the same name, PHP requires you to resolve the conflict explicitly using the "insteadof" operator to specify which method should be used.',
      difficulty: 'hard'
    },
    {
      id: 's7_traits5',
      text: 'Can traits in PHP define abstract methods?',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Traits can declare abstract methods, which means that any class using the trait must implement those methods.',
      difficulty: 'medium'
    },
    // ... more Traits questions ...
  ],

  'PHP extensions': [
    {
      id: 's7_phext1',
      text: 'What is the purpose of PHP extensions?',
      type: 'single',
      options: [
        'To enhance PHP's functionality by adding new features.',
        'To manage database connections.',
        'To handle HTTP requests.',
        'To define routing rules.'
      ],
      correctAnswer: 'To enhance PHP's functionality by adding new features.',
      explanation: 'PHP extensions provide additional functionalities to PHP, allowing developers to leverage extended libraries and features beyond the core language.',
      difficulty: 'easy'
    },
    {
      id: 's7_phext2',
      text: 'True or False: You can write custom PHP extensions in C.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'PHP extensions are typically written in C or C++ to extend the functionality of PHP by adding new functions, classes, or capabilities.',
      difficulty: 'medium'
    },
    {
      id: 's7_phext3',
      text: 'Which of the following are commonly used PHP extensions? (Select all that apply)',
      type: 'multiple',
      options: [
        'mysqli',
        'curl',
        'json',
        'twig'
      ],
      correctAnswer: ['mysqli', 'curl', 'json'],
      explanation: 'mysqli, curl, and json are common PHP extensions used for database interactions, making HTTP requests, and handling JSON data, respectively. Twig is a templating engine, not a PHP extension.',
      difficulty: 'medium'
    },
    {
      id: 's7_phext4',
      text: 'How can you enable a PHP extension in your PHP environment?',
      type: 'single',
      options: [
        'By using the enable_extension() function in your PHP code.',
        'By adding the extension name to the php.ini file and restarting the web server.',
        'By installing it via Composer.',
        'PHP extensions are enabled by default and cannot be disabled.'
      ],
      correctAnswer: 'By adding the extension name to the php.ini file and restarting the web server.',
      explanation: 'To enable a PHP extension, you typically add the extension name to the php.ini configuration file and then restart your web server or PHP service to apply the changes.',
      difficulty: 'hard'
    },
    {
      id: 's7_phext5',
      text: 'Which PHP extension would you use to work with XML documents?',
      type: 'single',
      options: ['SimpleXML', 'PDO', 'GD', 'cURL'],
      correctAnswer: 'SimpleXML',
      explanation: 'SimpleXML is a PHP extension designed for working with XML documents, allowing for easy parsing and manipulation of XML data.',
      difficulty: 'medium'
    },
    // ... more PHP extensions questions ...
  ],

  SPL: [
    {
      id: 's7_spl1',
      text: 'What does SPL stand for in PHP?',
      type: 'single',
      options: ['Standard PHP Library', 'Symfony PHP Library', 'Simple PHP Loader', 'Secure PHP Layers'],
      correctAnswer: 'Standard PHP Library',
      explanation: 'SPL stands for Standard PHP Library, which provides a collection of interfaces and classes to solve common problems.',
      difficulty: 'easy'
    },
    {
      id: 's7_spl2',
      text: 'True or False: The SPL in PHP includes data structures like stacks and queues.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'The SPL includes data structures such as SplStack, SplQueue, and others, providing built-in solutions for common data handling needs.',
      difficulty: 'easy'
    },
    {
      id: 's7_spl3',
      text: 'Which SPL class would you use to iterate over objects in a collection?',
      type: 'single',
      options: ['SplIterator', 'SplObserver', 'SplSubject', 'SplFileObject'],
      correctAnswer: 'SplIterator',
      explanation: 'SplIterator is an interface in PHP SPL that allows objects to be iterated with foreach, providing a way to traverse collections.',
      difficulty: 'medium'
    },
    {
      id: 's7_spl4',
      text: 'Which of the following are part of the PHP SPL? (Select all that apply)',
      type: 'multiple',
      options: [
        'SplDoublyLinkedList',
        'SplPriorityQueue',
        'SplFileManager',
        'SplFixedArray'
      ],
      correctAnswer: ['SplDoublyLinkedList', 'SplPriorityQueue', 'SplFixedArray'],
      explanation: 'SplDoublyLinkedList, SplPriorityQueue, and SplFixedArray are all part of the PHP SPL. SplFileManager is not a standard SPL class.',
      difficulty: 'hard'
    },
    {
      id: 's7_spl5',
      text: 'What is the purpose of the SplObserver and SplSubject interfaces in PHP SPL?',
      type: 'single',
      options: [
        'They provide interfaces for the Observer design pattern.',
        'They are used for file handling.',
        'They manage database connections.',
        'They handle HTTP requests.'
      ],
      correctAnswer: 'They provide interfaces for the Observer design pattern.',
      explanation: 'SplObserver and SplSubject are part of the SPL and are used to implement the Observer design pattern, allowing objects to notify observers about changes.',
      difficulty: 'hard'
    },
    // ... more SPL questions ...
  ],

  HTTP: [
    // ... HTTP questions ...
    {
      id: 's7_http1',
      text: 'What HTTP status code indicates that the client must authenticate itself to get the requested response?',
      type: 'single',
      options: ['401 Unauthorized', '403 Forbidden', '404 Not Found', '500 Internal Server Error'],
      correctAnswer: '401 Unauthorized',
      explanation: 'A 401 Unauthorized status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.',
      difficulty: 'easy'
    },
    // ... more HTTP questions ...
  ],

  'Client / Server interaction': [
    {
      id: 's7_csi1',
      text: 'In the context of client/server interaction, what does REST stand for?',
      type: 'single',
      options: [
        'Representational State Transfer',
        'Remote Execution Standard',
        'Responsive Entity Service Technology',
        'Recurrent State Transition'
      ],
      correctAnswer: 'Representational State Transfer',
      explanation: 'REST stands for Representational State Transfer, an architectural style for designing networked applications based on stateless communication and standard operations.',
      difficulty: 'easy'
    },
    {
      id: 's7_csi2',
      text: 'True or False: In a client/server model, the server initiates communication with the client.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'In a client/server model, the client initiates requests, and the server responds to those requests. The server does not typically initiate communication with the client.',
      difficulty: 'easy'
    },
    {
      id: 's7_csi3',
      text: 'Which of the following protocols is commonly used for client/server communication on the web? (Select all that apply)',
      type: 'multiple',
      options: ['HTTP', 'FTP', 'SMTP', 'SSH'],
      correctAnswer: ['HTTP', 'FTP', 'SMTP'],
      explanation: 'HTTP, FTP, and SMTP are protocols commonly used for client/server communication on the web. SSH is primarily used for secure shell access and not typically for general client/server interactions.',
      difficulty: 'medium'
    },
    {
      id: 's7_csi4',
      text: 'What is the primary role of a client in a client/server architecture?',
      type: 'single',
      options: [
        'To store and manage data',
        'To process and respond to requests',
        'To initiate requests for resources or services',
        'To authenticate users'
      ],
      correctAnswer: 'To initiate requests for resources or services',
      explanation: 'In a client/server architecture, the client’s main role is to initiate requests for resources or services, which the server then processes and responds to.',
      difficulty: 'medium'
    },
    {
      id: 's7_csi5',
      text: 'Which of the following are characteristics of RESTful APIs? (Select all that apply)',
      type: 'multiple',
      options: [
        'Statelessness',
        'Use of HTTP methods',
        'Fixed URL structures',
        'Stateful sessions'
      ],
      correctAnswer: ['Statelessness', 'Use of HTTP methods'],
      explanation: 'RESTful APIs are characterized by statelessness and the use of standard HTTP methods (GET, POST, PUT, DELETE). They do not rely on stateful sessions or fixed URL structures.',
      difficulty: 'hard'
    },
    // ... more Client / Server interaction questions ...
  ],

  'Status codes': [
    {
      id: 's7_sc1',
      text: 'What does the HTTP status code 204 represent?',
      type: 'single',
      options: ['No Content', 'Bad Request', 'Authentication Required', 'Server Error'],
      correctAnswer: 'No Content',
      explanation: 'The 204 No Content status code indicates that the server successfully processed the request and is not returning any content.',
      difficulty: 'easy'
    },
    {
      id: 's7_sc2',
      text: 'True or False: The HTTP status code 301 indicates a temporary redirect.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'The 301 status code indicates a permanent redirect. A temporary redirect is indicated by the 302 status code.',
      difficulty: 'easy'
    },
    {
      id: 's7_sc3',
      text: 'Which of the following HTTP status codes indicate client errors? (Select all that apply)',
      type: 'multiple',
      options: ['400 Bad Request', '401 Unauthorized', '404 Not Found', '500 Internal Server Error'],
      correctAnswer: ['400 Bad Request', '401 Unauthorized', '404 Not Found'],
      explanation: 'HTTP status codes in the 4xx range indicate client errors, such as bad requests, unauthorized access, and not found errors. The 500 range indicates server errors.',
      difficulty: 'medium'
    },
    {
      id: 's7_sc4',
      text: 'What is the meaning of the HTTP status code 503?',
      type: 'single',
      options: [
        'Service Unavailable',
        'Service Restarted',
        'Server Gone',
        'Session Timeout'
      ],
      correctAnswer: 'Service Unavailable',
      explanation: 'The 503 Service Unavailable status code means that the server is currently unable to handle the request due to temporary overload or maintenance.',
      difficulty: 'medium'
    },
    {
      id: 's7_sc5',
      text: 'Which HTTP status code is used when a request has succeeded and a new resource has been created as a result?',
      type: 'single',
      options: ['200 OK', '201 Created', '202 Accepted', '204 No Content'],
      correctAnswer: '201 Created',
      explanation: 'The 201 Created status code indicates that the request has been fulfilled and has resulted in the creation of a new resource.',
      difficulty: 'hard'
    },
    // ... more Status codes questions ...
  ],

  'HTTP request': [
    {
      id: 's7_hr1',
      text: 'Which HTTP method is typically used to retrieve data from a server?',
      type: 'single',
      options: ['POST', 'GET', 'PUT', 'DELETE'],
      correctAnswer: 'GET',
      explanation: 'The GET method is used to request data from a specified resource on the server without causing any side effects.',
      difficulty: 'easy'
    },
    {
      id: 's7_hr2',
      text: 'True or False: The HTTP POST method should be used for retrieving data without making any changes on the server.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'The POST method is used to submit data to be processed to a specified resource, often resulting in a change in server state. GET should be used for retrieving data without side effects.',
      difficulty: 'easy'
    },
    {
      id: 's7_hr3',
      text: 'Which of the following are valid HTTP request methods? (Select all that apply)',
      type: 'multiple',
      options: ['PATCH', 'CONNECT', 'COPY', 'ALTER'],
      correctAnswer: ['PATCH', 'CONNECT', 'COPY'],
      explanation: 'PATCH, CONNECT, and COPY are valid HTTP request methods. ALTER is not a standard HTTP method.',
      difficulty: 'medium'
    },
    {
      id: 's7_hr4',
      text: 'What is the primary purpose of the HTTP PUT method?',
      type: 'single',
      options: [
        'To retrieve data',
        'To update or create a resource',
        'To delete a resource',
        'To submit a form'
      ],
      correctAnswer: 'To update or create a resource',
      explanation: 'The PUT method is used to update an existing resource or create a new one if it does not exist on the server.',
      difficulty: 'medium'
    },
    {
      id: 's7_hr5',
      text: 'Which HTTP request method should be idempotent, ensuring that multiple identical requests have the same effect as a single request?',
      type: 'single',
      options: ['POST', 'GET', 'DELETE', 'PUT'],
      correctAnswer: 'PUT',
      explanation: 'The PUT method is idempotent, meaning that multiple identical PUT requests will have the same effect as a single request, making it safe for repeated applications.',
      difficulty: 'hard'
    },
    // ... more HTTP request questions ...
  ],

  'HTTP response': [
    {
      id: 's7_hresp1',
      text: 'In an HTTP response, which header field is used to specify the type of content being returned?',
      type: 'single',
      options: ['Content-Type', 'Content-Length', 'Content-Encoding', 'Content-Disposition'],
      correctAnswer: 'Content-Type',
      explanation: 'The Content-Type header field indicates the media type of the resource being sent to the client, such as text/html or application/json.',
      difficulty: 'easy'
    },
    {
      id: 's7_hresp2',
      text: 'True or False: The HTTP response status line contains the HTTP version, status code, and reason phrase.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'The HTTP response status line includes the HTTP version, the numerical status code, and a textual reason phrase.',
      difficulty: 'easy'
    },
    {
      id: 's7_hresp3',
      text: 'Which of the following HTTP response headers can be used to control caching behavior? (Select all that apply)',
      type: 'multiple',
      options: ['Cache-Control', 'Expires', 'ETag', 'Server'],
      correctAnswer: ['Cache-Control', 'Expires', 'ETag'],
      explanation: 'Cache-Control, Expires, and ETag headers are used to manage caching behavior in HTTP responses. The Server header provides information about the server software.',
      difficulty: 'medium'
    },
    {
      id: 's7_hresp4',
      text: 'What is the purpose of the Set-Cookie HTTP header in a response?',
      type: 'single',
      options: [
        'To retrieve cookies from the client',
        'To set cookies on the client',
        'To delete cookies on the client',
        'To update the content type'
      ],
      correctAnswer: 'To set cookies on the client',
      explanation: 'The Set-Cookie header is used by the server to send cookies to the client, which the client will store and include in subsequent requests.',
      difficulty: 'medium'
    },
    {
      id: 's7_hresp5',
      text: 'Which HTTP response header is used to provide a way to verify resource integrity during the transfer?',
      type: 'single',
      options: ['Content-MD5', 'Content-Security-Policy', 'Strict-Transport-Security', 'Access-Control-Allow-Origin'],
      correctAnswer: 'Content-MD5',
      explanation: 'The Content-MD5 header can be used to provide a base64-encoded MD5 hash of the response body, allowing clients to verify the integrity of the received data.',
      difficulty: 'hard'
    },
    // ... more HTTP response questions ...
  ],

  'HTTP methods': [
    {
      id: 's7_hm1',
      text: 'Which HTTP method is considered safe, as it does not modify resources on the server?',
      type: 'single',
      options: ['POST', 'PUT', 'GET', 'DELETE'],
      correctAnswer: 'GET',
      explanation: 'The GET method is considered safe because it requests data without making any changes to the server’s state or resources.',
      difficulty: 'easy'
    },
    {
      id: 's7_hm2',
      text: 'True or False: The HTTP PATCH method is used to perform partial updates to a resource.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'The PATCH method applies partial modifications to a resource, allowing for more granular updates compared to the PUT method.',
      difficulty: 'easy'
    },
    {
      id: 's7_hm3',
      text: 'Which of the following HTTP methods require the request to have a body? (Select all that apply)',
      type: 'multiple',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correctAnswer: ['POST', 'PUT', 'DELETE'],
      explanation: 'POST, PUT, and DELETE methods typically include a request body containing the data to be processed or modified. GET requests do not have a body.',
      difficulty: 'medium'
    },
    {
      id: 's7_hm4',
      text: 'What is the primary difference between the HTTP PUT and PATCH methods?',
      type: 'single',
      options: [
        'PUT is used for creating resources, while PATCH is for deleting them.',
        'PUT replaces the entire resource, while PATCH applies partial modifications.',
        'PUT is idempotent, while PATCH is not.',
        'There is no significant difference.'
      ],
      correctAnswer: 'PUT replaces the entire resource, while PATCH applies partial modifications.',
      explanation: 'PUT is used to completely replace a resource, whereas PATCH is intended for partial updates, modifying only specific parts of a resource.',
      difficulty: 'medium'
    },
    {
      id: 's7_hm5',
      text: 'Which HTTP method is typically used to submit form data that should result in a new resource being created on the server?',
      type: 'single',
      options: ['GET', 'PATCH', 'POST', 'OPTIONS'],
      correctAnswer: 'POST',
      explanation: 'The POST method is commonly used to submit form data to the server, resulting in the creation of a new resource.',
      difficulty: 'hard'
    },
    // ... more HTTP methods questions ...
  ],

  Cookies: [
    {
      id: 's7_cookies1',
      text: 'What is the primary purpose of HTTP cookies?',
      type: 'single',
      options: [
        'To store user preferences and session information on the client.',
        'To enhance the security of HTTP requests.',
        'To speed up the loading of web pages.',
        'To encrypt data sent between client and server.'
      ],
      correctAnswer: 'To store user preferences and session information on the client.',
      explanation: 'HTTP cookies are used to store user-specific information such as preferences, session identifiers, and other data that needs to persist between requests.',
      difficulty: 'easy'
    },
    {
      id: 's7_cookies2',
      text: 'True or False: Cookies can be accessed via JavaScript on the client-side.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Cookies can be accessed and manipulated via JavaScript using the "document.cookie" property, unless they are flagged with the HttpOnly attribute, which restricts access from JavaScript.',
      difficulty: 'easy'
    },
    {
      id: 's7_cookies3',
      text: 'Which attribute of a cookie ensures that it is only sent over secure HTTPS connections?',
      type: 'single',
      options: ['HttpOnly', 'Secure', 'SameSite', 'Expires'],
      correctAnswer: 'Secure',
      explanation: 'The Secure attribute ensures that the cookie is only sent over secure HTTPS connections, preventing it from being transmitted over unencrypted HTTP.',
      difficulty: 'medium'
    },
    {
      id: 's7_cookies4',
      text: 'Which of the following are benefits of using cookies in web applications? (Select all that apply)',
      type: 'multiple',
      options: [
        'Persisting user sessions',
        'Storing user preferences',
        'Increasing server processing speed',
        'Tracking user behavior'
      ],
      correctAnswer: ['Persisting user sessions', 'Storing user preferences', 'Tracking user behavior'],
      explanation: 'Cookies are beneficial for persisting user sessions, storing preferences, and tracking behavior. They do not directly increase server processing speed.',
      difficulty: 'medium'
    },
    {
      id: 's7_cookies5',
      text: 'What is the maximum size limit for a single cookie in most browsers?',
      type: 'single',
      options: ['4 KB', '8 KB', '16 KB', '32 KB'],
      correctAnswer: '4 KB',
      explanation: 'Most browsers impose a maximum size limit of approximately 4 KB for each individual cookie.',
      difficulty: 'hard'
    },
    // ... more Cookies questions ...
  ],

  Caching: [
    {
      id: 's7_caching1',
      text: 'What is the primary purpose of caching in web applications?',
      type: 'single',
      options: [
        'To store user passwords securely',
        'To reduce server load and improve response times',
        'To handle HTTP requests',
        'To manage database migrations'
      ],
      correctAnswer: 'To reduce server load and improve response times',
      explanation: 'Caching stores frequently accessed data in a temporary storage area to reduce the need for repeated processing or database queries, thereby decreasing server load and improving response times.',
      difficulty: 'easy'
    },
    {
      id: 's7_caching2',
      text: 'True or False: Cached data should never be updated once stored.',
      type: 'true_false',
      correctAnswer: false,
      explanation: 'Cached data can and should be updated to ensure that the application serves the most recent and accurate information when necessary.',
      difficulty: 'easy'
    },
    {
      id: 's7_caching3',
      text: 'Which HTTP header is used to control caching policies on the client-side? (Select all that apply)',
      type: 'multiple',
      options: [
        'Cache-Control',
        'Expires',
        'ETag',
        'Set-Cookie'
      ],
      correctAnswer: ['Cache-Control', 'Expires', 'ETag'],
      explanation: 'Cache-Control, Expires, and ETag headers are used to manage caching behavior in HTTP responses. Set-Cookie is used for managing cookies.',
      difficulty: 'medium'
    },
    {
      id: 's7_caching4',
      text: 'What is the difference between browser caching and server-side caching?',
      type: 'single',
      options: [
        'Browser caching stores data on the client-side, while server-side caching stores data on the server-side.',
        'Browser caching is less secure than server-side caching.',
        'Server-side caching cannot be invalidated, while browser caching can.',
        'There is no difference; both store data in the same location.'
      ],
      correctAnswer: 'Browser caching stores data on the client-side, while server-side caching stores data on the server-side.',
      explanation: 'Browser caching stores resources and data on the client-side to speed up load times, whereas server-side caching stores data on the server to reduce processing and database queries.',
      difficulty: 'medium'
    },
    {
      id: 's7_caching5',
      text: 'Which of the following are types of caching mechanisms used in Symfony? (Select all that apply)',
      type: 'multiple',
      options: [
        'HTTP Caching',
        'Page Caching',
        'Opcode Caching',
        'Twig Template Caching'
      ],
      correctAnswer: ['HTTP Caching', 'Page Caching', 'Twig Template Caching'],
      explanation: 'Symfony supports HTTP caching, page caching, and twig template caching. Opcode caching is handled by PHP itself, typically through extensions like OPcache.',
      difficulty: 'hard'
    },
    // ... more Caching questions ...
  ],

  'Content negotiation': [
    {
      id: 's7_cn1',
      text: 'What is content negotiation in the context of HTTP?',
      type: 'single',
      options: [
        'The process of negotiating user authentication credentials.',
        'The mechanism by which a server selects the appropriate response format based on client preferences.',
        'The negotiation between different content delivery networks.',
        'The process of compressing content for faster delivery.'
      ],
      correctAnswer: 'The mechanism by which a server selects the appropriate response format based on client preferences.',
      explanation: 'Content negotiation allows the server to select the most appropriate representation of a resource based on the client’s capabilities and preferences, such as preferred language or format.',
      difficulty: 'easy'
    },
    {
      id: 's7_cn2',
      text: 'True or False: The "Accept" header in an HTTP request is used by the client to specify the media types it can process.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'The "Accept" header informs the server about the media types the client is able to understand and process, enabling the server to respond with the most appropriate format.',
      difficulty: 'easy'
    },
    {
      id: 's7_cn3',
      text: 'Which of the following HTTP headers are involved in content negotiation? (Select all that apply)',
      type: 'multiple',
      options: [
        'Accept',
        'Content-Type',
        'Accept-Encoding',
        'Authorization'
      ],
      correctAnswer: ['Accept', 'Content-Type', 'Accept-Encoding'],
      explanation: 'Accept, Content-Type, and Accept-Encoding headers play roles in content negotiation by specifying preferred media types, response formats, and encoding methods.',
      difficulty: 'medium'
    },
    {
      id: 's7_cn4',
      text: 'What is the role of the "Vary" header in content negotiation?',
      type: 'single',
      options: [
        'To indicate which HTTP methods are allowed.',
        'To specify caching dependencies based on request headers.',
        'To determine the order of content types.',
        'To manage user sessions.'
      ],
      correctAnswer: 'To specify caching dependencies based on request headers.',
      explanation: 'The "Vary" header tells caches that the response varies based on the values of specified request headers, ensuring that different cached versions are stored for different header values.',
      difficulty: 'medium'
    },
    {
      id: 's7_cn5',
      text: 'Which of the following best describes the "Negotiate" strategy in Symfony’s Content Negotiation component?',
      type: 'single',
      options: [
        'It allows clients to negotiate SSL certificates.',
        'It selects the response format based on the order of accepted media types.',
        'It negotiates user authentication methods.',
        'It manages negotiation of caching policies.'
      ],
      correctAnswer: 'It selects the response format based on the order of accepted media types.',
      explanation: 'The "Negotiate" strategy in Symfony’s Content Negotiation component selects the response format by evaluating the client’s accepted media types in the order of their preference.',
      difficulty: 'hard'
    },
    // ... more Content negotiation questions ...
  ],

  'Language detection': [
    {
      id: 's7_ld1',
      text: 'What is the purpose of language detection in web applications?',
      type: 'single',
      options: [
        'To translate content into multiple languages automatically.',
        'To identify the user’s preferred language for content delivery.',
        'To encrypt data based on language settings.',
        'To manage user authentication based on language.'
      ],
      correctAnswer: 'To identify the user’s preferred language for content delivery.',
      explanation: 'Language detection is used to determine the user’s preferred language, allowing the application to deliver content in that language for better user experience.',
      difficulty: 'easy'
    },
    {
      id: 's7_ld2',
      text: 'True or False: The "Accept-Language" header in an HTTP request is used for language detection.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'The "Accept-Language" header indicates the client’s preferred languages, which servers can use to determine the appropriate language for content delivery.',
      difficulty: 'easy'
    },
    {
      id: 's7_ld3',
      text: 'Which Symfony component is commonly used for handling translations and language detection?',
      type: 'single',
      options: ['Serializer', 'Translator', 'EventDispatcher', 'Validator'],
      correctAnswer: 'Translator',
      explanation: 'The Translator component in Symfony manages translations and can utilize language detection to serve localized content based on user preferences.',
      difficulty: 'medium'
    },
    {
      id: 's7_ld4',
      text: 'Which of the following methods can Symfony use to detect the user’s preferred language? (Select all that apply)',
      type: 'multiple',
      options: [
        'Locale set in the user’s profile',
        'URL parameter',
        'Cookie value',
        'Browser’s Accept-Language header'
      ],
      correctAnswer: ['Locale set in the user’s profile', 'URL parameter', 'Cookie value', 'Browser’s Accept-Language header'],
      explanation: 'Symfony can detect the user’s preferred language through various means, including locale settings in the user’s profile, URL parameters, cookies, and the browser’s Accept-Language header.',
      difficulty: 'medium'
    },
    {
      id: 's7_ld5',
      text: 'What is the benefit of implementing language detection in a Symfony application?',
      type: 'single',
      options: [
        'Improved security',
        'Enhanced user experience through personalized content',
        'Faster server response times',
        'Simplified routing configurations'
      ],
      correctAnswer: 'Enhanced user experience through personalized content',
      explanation: 'Language detection allows Symfony applications to present content in the user’s preferred language, thereby enhancing the user experience by making the application more accessible and personalized.',
      difficulty: 'hard'
    },
    // ... more Language detection questions ...
  ],

  'Symfony HttpClient component': [
    {
      id: 's7_httpclient1',
      text: 'What is the primary use of the Symfony HttpClient component?',
      type: 'single',
      options: [
        'To handle HTTP requests and responses within Symfony applications.',
        'To manage database connections.',
        'To render Twig templates.',
        'To handle form submissions.'
      ],
      correctAnswer: 'To handle HTTP requests and responses within Symfony applications.',
      explanation: 'The HttpClient component in Symfony is used to send HTTP requests and handle responses, enabling integration with external APIs and services.',
      difficulty: 'easy'
    },
    {
      id: 's7_httpclient2',
      text: 'True or False: The Symfony HttpClient component supports asynchronous requests.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'The Symfony HttpClient component supports asynchronous requests, allowing multiple HTTP requests to be sent concurrently without blocking the execution flow.',
      difficulty: 'easy'
    },
    {
      id: 's7_httpclient3',
      text: 'Which method would you use to send a GET request using Symfony HttpClient?',
      type: 'single',
      options: [
        '$client->post()',
        '$client->get()',
        '$client->put()',
        '$client->delete()'
      ],
      correctAnswer: '$client->get()',
      explanation: 'To send a GET request using Symfony HttpClient, you use the get() method of the HttpClient instance.',
      difficulty: 'medium'
    },
    {
      id: 's7_httpclient4',
      text: 'Which of the following features are supported by Symfony HttpClient? (Select all that apply)',
      type: 'multiple',
      options: [
        'Automatic retries on failure',
        'HTTP/2 support',
        'Built-in caching of responses',
        'Streaming responses'
      ],
      correctAnswer: ['Automatic retries on failure', 'HTTP/2 support', 'Streaming responses'],
      explanation: 'Symfony HttpClient supports automatic retries, HTTP/2, and streaming responses. It does not provide built-in caching of responses.',
      difficulty: 'medium'
    },
    {
      id: 's7_httpclient5',
      text: 'How can you handle errors when making HTTP requests with Symfony HttpClient?',
      type: 'single',
      options: [
        'By checking the HTTP status code manually',
        'By using try-catch blocks to catch exceptions like TransportException',
        'Errors cannot be handled; they will crash the application',
        'By configuring error handlers in the php.ini file'
      ],
      correctAnswer: 'By using try-catch blocks to catch exceptions like TransportException',
      explanation: 'Symfony HttpClient throws exceptions such as TransportException on errors, which can be handled using try-catch blocks to manage error scenarios gracefully.',
      difficulty: 'hard'
    },
    // ... more Symfony HttpClient component questions ...
  ],

  // ... Add more topics and questions here as per the request ...

  // Example of another topic with questions
  'Symfony Flex': [
    {
      id: 's7_flex1',
      text: 'What is Symfony Flex primarily used for?',
      type: 'single',
      options: [
        'Managing database migrations',
        'Automating the installation and configuration of Symfony bundles',
        'Handling HTTP requests',
        'Rendering Twig templates'
      ],
      correctAnswer: 'Automating the installation and configuration of Symfony bundles',
      explanation: 'Symfony Flex is a Composer plugin that automates the installation and configuration of Symfony bundles, making it easier to manage dependencies and set up Symfony projects.',
      difficulty: 'easy'
    },
    {
      id: 's7_flex2',
      text: 'True or False: Symfony Flex can automatically configure recipes for installed bundles.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Symfony Flex uses recipes to automatically configure installed bundles, handling tasks such as creating configuration files and setting up initial settings.',
      difficulty: 'easy'
    },
    {
      id: 's7_flex3',
      text: 'Which of the following are benefits of using Symfony Flex? (Select all that apply)',
      type: 'multiple',
      options: [
        'Simplifies the process of adding new bundles',
        'Manages dependencies through Composer',
        'Provides built-in ORM capabilities',
        'Handles environment variable configurations'
      ],
      correctAnswer: ['Simplifies the process of adding new bundles', 'Manages dependencies through Composer', 'Handles environment variable configurations'],
      explanation: 'Symfony Flex streamlines adding new bundles, manages dependencies via Composer, and can handle environment configurations. It does not provide ORM capabilities, which are handled by other components like Doctrine.',
      difficulty: 'medium'
    },
    {
      id: 's7_flex4',
      text: 'How does Symfony Flex differ from traditional Symfony installation methods?',
      type: 'single',
      options: [
        'Flex uses YAML configuration files exclusively.',
        'Flex relies on manual setup of each bundle.',
        'Flex automates bundle installation and configuration using recipes.',
        'Flex does not support third-party bundles.'
      ],
      correctAnswer: 'Flex automates bundle installation and configuration using recipes.',
      explanation: 'Symfony Flex automates the installation and configuration process of bundles by using predefined recipes, reducing the need for manual setup and configuration.',
      difficulty: 'medium'
    },
    {
      id: 's7_flex5',
      text: 'Which Symfony Flex command is used to install a new recipe for a bundle?',
      type: 'single',
      options: [
        'composer require',
        'php bin/console flex:install',
        'php bin/console make:bundle',
        'composer install-recipe'
      ],
      correctAnswer: 'composer require',
      explanation: 'Using "composer require" to install a bundle with Symfony Flex triggers the associated recipe to automatically configure the bundle during installation.',
      difficulty: 'hard'
    },
    // ... more Symfony Flex questions ...
  ],
  
  // Continue adding other topics with their respective questions...
};

export default questionBank;