The Politicians Library
=======================
This is an angularjs project that provides information about the top fundraising politicians every election year and their top contributors. Data comes from the [Sunlight Influence Explorer API].(https://sunlightlabs.github.io/datacommons/index.html). There is only data available from 1990 onward. Please visit the [site](http://lobby-info.herokuapp.com/).

Cloning the project
-------------------
If you wish to clone the project, you must create your own configuration file and place it in a config folder under the javascript directory. It should like this:
```javascript
angular.module('PoliticiansLibrary').constant('plConfig', {
  apiKey: 'YOUR API KEY HERE'
});
```
