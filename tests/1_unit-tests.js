/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32.00);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '2.4L';
      assert.equal(convertHandler.getNum(input),2.40);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '2/3L';
      assert.equal(convertHandler.getNum(input),0.67);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '2.4/3L';
      assert.equal(convertHandler.getNum(input),0.80);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '5.4/7/4L'
      assert.equal(convertHandler.getNum(input), "invalid input");
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = "no number"
      
      assert.equal(convertHandler.getNum(input), "invalid input");
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(`10${ele}`), ele)
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = ['gaal','lw','i','er','wga','fg','OJ','LP','MSI','KKM','LEFBS','KGS'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(`10${ele}`), 'Not a valid unit')
      });
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['gallons', 'litres', 'miles','kilometres','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [18.9271, 'l'];
      let expected = 5;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [8, 'mi'];
      let expected = 12.87;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [12.87, 'km'];
      let expected = 8;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [3, 'lbs'];
      let expected = 1.36;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [1.36, 'kg'];
      let expected = 3;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});