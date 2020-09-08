const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullName', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(1)).to.equal('Error');  
    expect(formatFullname()).to.equal('Error');  
    expect(formatFullname([])).to.equal('Error');  
    expect(formatFullname({})).to.equal('Error');  
    expect(formatFullname(function () {})).to.equal('Error');  
  });
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');  
    expect(formatFullname('John')).to.equal('Error');  
  });
  it('should return an correct output', () => {
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');  
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');  
    expect(formatFullname('JOHN doE')).to.equal('John Doe');  
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');  
  });
});