$(function() {
 
    Parse.$ = jQuery;
 
  // Replace this line with the one on your Quickstart Guide Page
   Parse.initialize("QtuPzeswEeOQSYAfS93rp66rX36xzeF1zW1a6oJ7", "kkepbzKYoVhTxvMgvBevzBVLwP3kr13I3neIUg6S");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});