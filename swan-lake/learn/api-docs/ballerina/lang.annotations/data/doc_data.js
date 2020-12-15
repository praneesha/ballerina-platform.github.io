var docData = {"isSingleFile":false,"name":"lang.annotations","description":"","modules":[{"id":"lang.annotations","summary":"\u003cp\u003eThis module provides predefined annotations and default error type declaration.\u003c/p\u003e\n","description":"\u003ch2\u003eModule Overview\u003c/h2\u003e\n\u003cp\u003eThis module provides predefined annotations and default error type declaration.\u003c/p\u003e\n","orgName":"ballerina","version":"1.0.0","records":[{"fields":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"name","description":"\u003cp\u003ename of the strand.\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"policy","description":"\u003cp\u003especifies the dispatching policy (not yet supported).\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"\"parent\"","type":{"moduleName":"lang.annotations","name":"Thread","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"thread","description":"\u003cp\u003especifies whether strand should run on parent strand\u0027s thread or in any available thread.\u003c/p\u003e\n","isDeprecated":false}],"isClosed":true,"name":"StrandData","description":"\u003cp\u003eDescribes Strand execution details for the runtime.\u003c/p\u003e\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[],"constants":[],"annotations":[{"attachmentPoints":"parameter, return, source listener, source var, source type","name":"tainted","description":"\u003cp\u003eDenote that the return value is tainted.\u003c/p\u003e\n","isDeprecated":false},{"attachmentPoints":"return, parameter, source type, source listener","name":"untainted","description":"\u003cp\u003eDenote that the return value is untainted, parameter expect untainted value, type cast mark value untainted,\ndenote a listener as producing untainted arguments to service resource params.\u003c/p\u003e\n","isDeprecated":false},{"attachmentPoints":"source type","name":"typeParam","description":"\u003cp\u003eDenotes annotated type is a parametric type.\u003c/p\u003e\n","isDeprecated":false},{"attachmentPoints":"source type","name":"builtinSubtype","description":"\u003cp\u003eDenotes annotated type is a builtin sub type.\u003c/p\u003e\n","isDeprecated":false},{"attachmentPoints":"source parameter","name":"isolatedParam","description":"\u003cp\u003eDenotes that the annotated parameter expects an \u003ccode\u003eisolated\u003c/code\u003e value when used in an \u003ccode\u003eisolated\u003c/code\u003e context.\u003c/p\u003e\n","isDeprecated":false},{"attachmentPoints":"source type, source class, source const, source annotation,                 source function, source parameter, source object function, source object field","name":"deprecated","description":"\u003cp\u003eAn annotation that marks a program element as deprecated.\nThe usage of a deprecated program element is not recommended due to\nvarious reasons. Hence, the compiler issues a warning when such an element is used.\u003c/p\u003e\n","isDeprecated":false},{"type":{"moduleName":"lang.annotations","name":"StrandData","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"attachmentPoints":"source worker","name":"strand","description":"\u003cp\u003eDenotes new Strand execution semantics.\u003c/p\u003e\n","isDeprecated":false},{"type":{"name":"record {| string path; |} ","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":false,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"attachmentPoints":"source type, source function, source class","name":"icon","description":"\u003cp\u003eDenotes icon metadata related to types and functions.\u003c/p\u003e\n","isDeprecated":false}],"errors":[{"detailType":{"name":"map","category":"map","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"constraint":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"anydata","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"readonly","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}},"name":"\u0027error","description":"\u003cp\u003eDefault error type.\nThe type parameter is for the error detail type. It\u0027s constrained to anydata or readonly type.\u003c/p\u003e\n","isDeprecated":false}],"types":[{"name":"Thread","description":"","isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"\"parent\" ","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"\"any\"","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}],"resources":[]}]};