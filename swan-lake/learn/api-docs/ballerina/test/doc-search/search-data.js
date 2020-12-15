var searchData = {
  "modules": [
    {
      "id": "test",
      "description": "\u003cp\u003eThis module facilitates developers to write automation tests for ballerina code in a simple manner.\u003c/p\u003e"
    }
  ],
  "classes": [
    {
      "id": "MockObject",
      "description": "\u003cp\u003eRepresents a Mock object in which to create stubs for member functions and variables\u003c/p\u003e\n",
      "moduleId": "test"
    },
    {
      "id": "MemberFunctionStub",
      "description": "\u003cp\u003eRepresents an object that allows stubbing member function invocations.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "MemberVariableStub",
      "description": "\u003cp\u003eRepresents an object that allows stubbing member variables retrieved.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "MockFunction",
      "description": "\u003cp\u003eRepresents a MockFunction object\u003c/p\u003e\n",
      "moduleId": "test"
    },
    {
      "id": "FunctionStub",
      "description": "\u003cp\u003eRepresents an object that allows stubbing function invocations\u003c/p\u003e\n",
      "moduleId": "test"
    }
  ],
  "functions": [
    {
      "id": "prepare",
      "description": "\u003cp\u003ePrepares a provided default mock object for stubbing.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "when",
      "description": "\u003cp\u003eObjects and functions related to function mocking\nAllows a function to stub.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "mock",
      "description": "\u003cp\u003eCreates and returns a mock object of provided type description.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "mockHandler",
      "description": "\u003cp\u003eInter-op to handle function mocking.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "createBallerinaError",
      "description": "\u003cp\u003eCreates an AssertError with custom message and category.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "assertTrue",
      "description": "\u003cp\u003eAsserts whether the given condition is true.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "assertFalse",
      "description": "\u003cp\u003eAsserts whether the given condition is false.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "assertEquals",
      "description": "\u003cp\u003eAsserts whether the given values are equal.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "assertNotEquals",
      "description": "\u003cp\u003eAsserts whether the given values are not equal.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "assertExactEquals",
      "description": "\u003cp\u003eAsserts whether the given values are exactly equal.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "assertNotExactEquals",
      "description": "\u003cp\u003eAsserts whether the given values are not exactly equal.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "assertFail",
      "description": "\u003cp\u003eAssert failure is triggered based on user discretion.\u003c/p\u003e",
      "moduleId": "test"
    }
  ],
  "records": [
    {
      "id": "TestConfig",
      "description": "\u003cp\u003eConfiguration set for test functions.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "MockConfig",
      "description": "\u003cp\u003eConfiguration of the function to be mocked.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "AfterSuiteConfig",
      "description": "",
      "moduleId": "test"
    },
    {
      "id": "BeforeGroupsConfig",
      "description": "",
      "moduleId": "test"
    },
    {
      "id": "AfterGroupsConfig",
      "description": "",
      "moduleId": "test"
    }
  ],
  "constants": [
    {
      "id": "ANY",
      "description": "\u003cp\u003eRepresents the placeholder to be given for object or record type arguments\u003c/p\u003e\n",
      "moduleId": "test"
    },
    {
      "id": "INVALID_OBJECT_ERROR",
      "description": "\u003cp\u003eRepresents the reason for the mock object related errors.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "FUNCTION_NOT_FOUND_ERROR",
      "description": "\u003cp\u003eRepresents the reason for the non-existing member function related errors.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "FUNCTION_SIGNATURE_MISMATCH_ERROR",
      "description": "\u003cp\u003eRepresents the reason for the function signature related errors.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "INVALID_MEMBER_FIELD_ERROR",
      "description": "\u003cp\u003eRepresents the reason for the object member field related errors.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "FUNCTION_CALL_ERROR",
      "description": "\u003cp\u003eRepresents the reason for function mocking related errors.\u003c/p\u003e",
      "moduleId": "test"
    }
  ],
  "errors": [
    {
      "id": "InvalidObjectError",
      "description": "",
      "moduleId": "test"
    },
    {
      "id": "FunctionNotFoundError",
      "description": "",
      "moduleId": "test"
    },
    {
      "id": "FunctionSignatureMismatchError",
      "description": "",
      "moduleId": "test"
    },
    {
      "id": "InvalidMemberFieldError",
      "description": "",
      "moduleId": "test"
    },
    {
      "id": "FunctionCallError",
      "description": "",
      "moduleId": "test"
    }
  ],
  "types": [
    {
      "id": "Error",
      "description": "\u003cp\u003eRepresents mocking related errors\u003c/p\u003e\n",
      "moduleId": "test"
    }
  ],
  "clients": [],
  "listeners": [],
  "annotations": [
    {
      "id": "Config",
      "description": "",
      "moduleId": "test"
    },
    {
      "id": "BeforeSuite",
      "description": "\u003cp\u003eIdentifies beforeSuite function.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "AfterSuite",
      "description": "\u003cp\u003eIdentifies afterSuite function.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "BeforeGroups",
      "description": "\u003cp\u003eIdentifies beforeGroup function.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "AfterGroups",
      "description": "\u003cp\u003eIdentifies afterGroup function.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "BeforeEach",
      "description": "\u003cp\u003eIdentifies beforeTest function.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "AfterEach",
      "description": "\u003cp\u003eIdentifies afterTest function.\u003c/p\u003e",
      "moduleId": "test"
    },
    {
      "id": "Mock",
      "description": "\u003cp\u003eIdentifies the MockFunction object\u003c/p\u003e\n",
      "moduleId": "test"
    }
  ],
  "abstractObjects": []
};