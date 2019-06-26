# Logging Done Simple


## Install

```sh
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
```typescript
logger.log(message: string, objects: null | {} | {}[] = null, title: string)
```

###### You don't have to pass a object. 
```javascript
logger.info("message", null, "title");
```

##### Console example
![Log Example](https://github.com/jeremiahtenbrink/logging-done-simple/blob/master/resources/logExample.JPG?raw=true)


### Warning and errors do show up on production builds.
![Log Example](https://github.com/jeremiahtenbrink/logging-done-simple/blob/master/resources/warningErrorExample.JPG?raw=true)

### Write you own styles
```javascript
logger.setStyle("styleType", "string of styles");
```
##### Style Types = "error", "info", "log", "warning"
##### Error and Warning styles only apply to objects in the warning and error calls
###### String of styles = "; seperated list of css properties"
###### Example = ("error", "background-color: red; color: white; margin-left: 2rem")