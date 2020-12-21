var searchData = {
  "modules": [
    {
      "id": "websub",
      "description": "\u003cp\u003eThis module contains an implementation of the W3C \u003ca href\u003d\"https://www.\u003c/p\u003e",
      "orgName": "ballerina",
      "version": "1.0.8"
    }
  ],
  "classes": [
    {
      "id": "IntentVerificationRequest",
      "description": "\u003cp\u003erepresenting an intent verification request received.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "Notification",
      "description": "\u003cp\u003eRepresents the WebSub Content Delivery Request received.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "Bridge",
      "description": "",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "Hub",
      "description": "\u003cp\u003eRepresents the Ballerina WebSub Hub.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "functions": [
    {
      "id": "extractTopicAndHubUrls",
      "description": "\u003cp\u003eRetrieves hub and topic URLs from the \u003ccode\u003ehttp:response\u003c/code\u003e from a publisher to a discovery request.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "startHub",
      "description": "\u003cp\u003eStarts up the Ballerina Hub.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "addWebSubLinkHeader",
      "description": "\u003cp\u003eFunction to add link headers to a response to allow WebSub discovery.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "records": [
    {
      "id": "SubscriberServiceConfiguration",
      "description": "\u003cp\u003eConfiguration for a WebSubSubscriber service.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SubscriptionChangeRequest",
      "description": "\u003cp\u003eRecord representing a WebSub subscription change request.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SubscriptionChangeResponse",
      "description": "\u003cp\u003eRecord representing subscription/unsubscription details if a subscription/unsubscription request is successful.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "HubConfiguration",
      "description": "\u003cp\u003eRecord representing hub specific configurations.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "RemotePublishConfig",
      "description": "\u003cp\u003eRecord representing remote publishing allowance.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SubscriptionDetails",
      "description": "\u003cp\u003eRecord to represent persisted Subscription Details retrieved.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "HubStartedUpError",
      "description": "\u003cp\u003eError to represent that a WebSubHub is already started up, encapsulating the started up Hub.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SubscriberDetails",
      "description": "\u003cp\u003eRecord to represent Subscriber Details.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SubscriberListenerConfiguration",
      "description": "\u003cp\u003eRepresents the configuration for the WebSub Subscriber Service Listener.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "ExtensionConfig",
      "description": "\u003cp\u003eThe extension configuration to introduce custom subscriber services.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "constants": [
    {
      "id": "PUBLISH_MODE_DIRECT",
      "description": "\u003cp\u003e\u003ccode\u003eRemotePublishMode\u003c/code\u003e indicating direct update content notification (fat-ping).\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "PUBLISH_MODE_FETCH",
      "description": "\u003cp\u003e\u003ccode\u003eRemotePublishMode\u003c/code\u003e indicating that once the publisher notifies the hub that an update is available, the hub\nneeds to fetch the topic URL to identify the update content.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SHA1",
      "description": "\u003cp\u003eThe constant used to represent SHA-1 cryptographic hash algorithm\u003c/p\u003e\n",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SHA256",
      "description": "\u003cp\u003eThe constant used to represent SHA-256 cryptographic hash algorithm\u003c/p\u003e\n",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "TOPIC_ID_HEADER",
      "description": "\u003cp\u003e\u003ccode\u003eTopicIdentifier\u003c/code\u003e indicating dispatching based solely on a header of the request.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "TOPIC_ID_PAYLOAD_KEY",
      "description": "\u003cp\u003e\u003ccode\u003eTopicIdentifier\u003c/code\u003e indicating dispatching based solely on a value for a key in the JSON payload of the request.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "TOPIC_ID_HEADER_AND_PAYLOAD",
      "description": "\u003cp\u003e\u003ccode\u003eTopicIdentifier\u003c/code\u003e indicating dispatching based on a combination of header and values specified for a key/key(s) in\nthe JSON payload of the request.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "errors": [
    {
      "id": "ListenerStartupError",
      "description": "\u003cp\u003eRepresents a listener startup error.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "HubStartupError",
      "description": "\u003cp\u003eRepresents a hub startup error.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "WebSubError",
      "description": "\u003cp\u003eRepresents a webSub distinct error.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "types": [
    {
      "id": "RemotePublishMode",
      "description": "\u003cp\u003eThe identifier to be used to identify the mode in which update content should be identified.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SignatureMethod",
      "description": "\u003cp\u003eThe identifier to be used to identify the cryptographic hash algorithm.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "TopicIdentifier",
      "description": "\u003cp\u003eThe identifier to be used to identify the topic for dispatching with custom subscriber services.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "clients": [
    {
      "id": "PublisherClient",
      "description": "\u003cp\u003eThe HTTP based client for WebSub topic registration and unregistration, and notifying the hub of new updates.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "Caller",
      "description": "\u003cp\u003eThe caller remote functions to respond to client requests.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SubscriptionClient",
      "description": "\u003cp\u003eThe HTTP based client for WebSub subscription and unsubscription.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "listeners": [
    {
      "id": "Listener",
      "description": "\u003cp\u003eRepresents the WebSubSubscriber Service Listener.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "annotations": [
    {
      "id": "SubscriberServiceConfig",
      "description": "\u003cp\u003eWebSub Subscriber Configuration for the service, indicating subscription related parameters.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "SpecificSubscriber",
      "description": "\u003cp\u003eAnnotation to declare that the service represents a specific webhook.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ],
  "abstractObjects": [
    {
      "id": "SubscriberService",
      "description": "\u003cp\u003eThe WebSub service type\u003c/p\u003e\n",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    },
    {
      "id": "HubPersistenceStore",
      "description": "\u003cp\u003eRepresents the hub persistence configuration and functions.\u003c/p\u003e",
      "moduleId": "websub",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.8"
    }
  ]
};