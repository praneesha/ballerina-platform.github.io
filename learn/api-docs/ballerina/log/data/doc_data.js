var docData = {"packages":[{"isSingleFile":false,"description":"## Package Overview\n\nThis package provides a basic API for logging.\n\n### Loggers \n\nEach module in Ballerina has its own dedicated logger. A log record contains the timestamp, log level, module name, and the log message. The `printError()` function takes an optional `error` record apart from the log message. A sample log record logged from the `foo` module would look as follows:\n```bash\ntime \u003d 2020-12-16 11:22:44,029 level \u003d ERROR module \u003d myorg/foo message \u003d \"Something went wrong.\"\n```\n\n### Log Output\n\nLogs are written to the `stderr` stream (i.e., the console) by default in order to make the logs more container friendly.\n\nTo publish the logs to a file, redirect the `stderr` stream to a file.\n```bash\n$ ballerina run program.bal 2\u003e b7a-user.log\n```\n\n### Log Levels\n\nThis package provides functions to log at the `INFO` and `ERROR` levels. There is no user configuration to control the log level and by default, all the logs will get printed.\n\nFor information on the operation, which you can perform with this package, see the below Function. For examples on the usage of the operation, see [Log Api](https://ballerina.io/learn/by-example/log-api.html).\n","modules":[{"id":"log","summary":"","description":"","orgName":"ballerina","version":"1.1.0-alpha3","records":[{"fields":[{"defaultValue":"","type":{"name":"never","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"msg","description":"msg which cannot be a key\n","isDeprecated":false},{"defaultValue":"","type":{"name":"never","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"err","description":"error\n","isDeprecated":false}],"isClosed":true,"name":"ErrorKeyValues","description":"Key-Value pairs that needs to be desplayed in the error log.\n\n","isDeprecated":false},{"fields":[{"defaultValue":"","type":{"name":"never","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"msg","description":"msg which cannot be a key\n","isDeprecated":false}],"isClosed":true,"name":"KeyValues","description":"Key-Value pairs that needs to be desplayed in the log.\n\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"msg","description":"The message to be logged\n","isDeprecated":false}],"returnParameters":[],"name":"print","description":"Prints logs.\n```ballerina\n# log:print(\"something went wrong\", id \u003d 845315)\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"msg","description":"The message to be logged\n","isDeprecated":false},{"defaultValue":"()","type":{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"err","description":"The error struct to be logged\n","isDeprecated":false}],"returnParameters":[],"name":"printError","description":"Prints error logs.\n```ballerina\n# error e \u003d error(\"error occurred\");\n# log:printError(\"error log with cause\", err \u003d e, id \u003d 845315);\n# ```\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[],"types":[{"name":"Value","description":"A value of anydata type\n","isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"anydata","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"log","version":"1.1.0-alpha3","name":"Valuer","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}],"enums":[]}],"name":"log","orgName":"ballerina","version":"1.1.0-alpha3","summary":"This package provides a basic API for logging.\n"}]};