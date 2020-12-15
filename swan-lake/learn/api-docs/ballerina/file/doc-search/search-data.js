var searchData = {
  "modules": [
    {
      "id": "file",
      "description": "\u003cp\u003eThis module contains functions to perform file system based operations such as create, delete, rename the\nfile/directory, and retrieve metadata of the file.\u003c/p\u003e"
    }
  ],
  "classes": [],
  "functions": [
    {
      "id": "getAbsolutePath",
      "description": "\u003cp\u003eRetrieves the absolute path from the provided location.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "isAbsolutePath",
      "description": "\u003cp\u003eReports whether the path is absolute.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "basename",
      "description": "\u003cp\u003eRetrieves the base name of the file from the provided location,\nwhich is the last element of the path.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "parentPath",
      "description": "\u003cp\u003eReturns the enclosing parent directory.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "normalizePath",
      "description": "\u003cp\u003eNormalizes a path value.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "splitPath",
      "description": "\u003cp\u003eSplits a list of paths joined by the OS-specific path separator.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "joinPath",
      "description": "\u003cp\u003eJoins any number of path elements into a single path.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "relativePath",
      "description": "\u003cp\u003eReturns a relative path, which is logically equivalent to the target path when joined to the base path with an\nintervening separator.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "getCurrentDir",
      "description": "\u003cp\u003eReturns the current working directory.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "createDir",
      "description": "\u003cp\u003eCreates a new directory with the specified name.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "remove",
      "description": "\u003cp\u003eRemoves the specified file or directory.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "rename",
      "description": "\u003cp\u003eRenames(Moves) the old path with the new path.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "create",
      "description": "\u003cp\u003eCreates a file in the specified file path.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "getMetaData",
      "description": "\u003cp\u003eReturns the metadata information of the file specified in the file path.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "readDir",
      "description": "\u003cp\u003eReads the directory and returns a list of metadata of files and directories\ninside the specified directory.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "copy",
      "description": "\u003cp\u003eCopy the file/directory in the old path to the new path.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "createTemp",
      "description": "\u003cp\u003eCreates a temporary file.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "createTempDir",
      "description": "\u003cp\u003eCreates a temporary directory.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "test",
      "description": "\u003cp\u003eTests a file path against a test condition .\u003c/p\u003e",
      "moduleId": "file"
    }
  ],
  "records": [
    {
      "id": "ListenerConfig",
      "description": "\u003cp\u003eRepresents configurations that required for directory listener.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "FileEvent",
      "description": "\u003cp\u003eRepresents an event which will trigger when there is a changes to listining direcotry.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "MetaData",
      "description": "\u003cp\u003eMetadata record contains metadata information of a file.\u003c/p\u003e",
      "moduleId": "file"
    }
  ],
  "constants": [],
  "errors": [
    {
      "id": "InvalidOperationError",
      "description": "\u003cp\u003eRepresents an error that occurs when a file system operation is denied due to invalidity.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "PermissionError",
      "description": "\u003cp\u003eRepresents an error that occurs when a file system operation is denied, due to the absence of file permission.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "FileSystemError",
      "description": "\u003cp\u003eRepresents an error that occurs when a file system operation fails.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "FileNotFoundError",
      "description": "\u003cp\u003eRepresents an error that occurs when the file/directory does not exist at the given filepath.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "NotLinkError",
      "description": "\u003cp\u003eRepresents error occur when the file at the given filepath is not a symbolic link.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "IOError",
      "description": "\u003cp\u003eRepresents IO error occur when trying to access the file at the given filepath.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "SecurityError",
      "description": "\u003cp\u003eRepresents security error occur when trying to access the file at the given filepath.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "InvalidPathError",
      "description": "\u003cp\u003eRepresents error occur when the given file path is invalid.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "InvalidPatternError",
      "description": "\u003cp\u003eRepresent error occur when the given pattern is not a valid filepath pattern.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "RelativePathError",
      "description": "\u003cp\u003eRepresents an error that occurs when the given target filepath cannot be derived relative to the base filepath.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "UNCPathError",
      "description": "\u003cp\u003eRepresents error occur in the UNC path.\u003c/p\u003e",
      "moduleId": "file"
    },
    {
      "id": "GenericError",
      "description": "\u003cp\u003eRepresents generic error for filepath\u003c/p\u003e\n",
      "moduleId": "file"
    }
  ],
  "types": [
    {
      "id": "Error",
      "description": "\u003cp\u003eRepresents file system related errors.\u003c/p\u003e",
      "moduleId": "file"
    }
  ],
  "clients": [],
  "listeners": [
    {
      "id": "Listener",
      "description": "\u003cp\u003eRepresents the directory listener endpoint, which is used to listen to a directory in the local file system.\u003c/p\u003e",
      "moduleId": "file"
    }
  ],
  "annotations": [],
  "abstractObjects": []
};