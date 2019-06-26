# Logging Done Simple


## Install

```console
npm install logging-done-simple
```


## Import && Create logging group name

```javascript
import Logger from 'logging-done-simple';
const logger = Logger("Group Name");
```

## Use logger to log to console. 
###### .info() and .log() will not show up on production builds.

```javascript
logger.info("message goes here" , {id: 1, name: "some name"}, "messageTitle"); 
```

### You can log just a single object. Or a object array
```javascript 
logger.log("message goes here" , [this.state, this.props], 
"messageTitle");
```

###### Arguments are as follows.
```logger.log(message: string, objects: null | {} | {}[] = null, title: string)```

##### Console example
![Log Example](https://github.com/jeremiahtenbrink/logging-done-simple/blob/master/resources/logExample.JPG?raw=true)


### Warning and errors do show up on production builds.
![Log Example](https://github.com/jeremiahtenbrink/logging-done-simple/blob/master/resources/warningErrorExample.JPG?raw=true)