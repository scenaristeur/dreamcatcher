// Write your tests here!
// Here is an example.
if (Meteor.isClient){
  Tinytest.add('Processing object exists', function (test) {
    test.equal(typeof(p5)!='undefined', true);
  });
}
