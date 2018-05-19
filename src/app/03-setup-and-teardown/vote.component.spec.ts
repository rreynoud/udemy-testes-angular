import { Component } from '@angular/core';
import { VoteComponent } from './vote.component'; 

//Arrange
let component: VoteComponent;

beforeEach(()=>{
  component = new VoteComponent();
});

describe('VoteComponent', () => {
  it('should increment totalVotes when upvoted', () => {
 

    //afterEach(() => {});
    // beforeAll();
    // afterAll();

    // Act
    component.upVote();

    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {
    //Arrange
    let component = new VoteComponent();
    
    // Act
    component.downVote();

    //Assert
    expect(component.totalVotes).toBe(-1);
  });

});