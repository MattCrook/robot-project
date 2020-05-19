## Project: Building an Autonomous Robot

This project is a small project to build an automaton, a little program that performs a task in a virtual world. The automaton will be a "mail-delivery" robot picking up and dropping off parcels.

* I have set up a small imaginary village for the robot to travel through.
```js
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];
```
The network of roads in the village forms a graph. A graph is a collection of points (places in the village) with lines between them (roads). This graph will be the world that our robot moves through.

## The Task

The robot will be moving around the village. There are parcels in various places, each addressed to some other place. The robot picks up parcels when it comes to them and delivers them when it arrives at their destinations.

* The automaton must decide, at each point, where to go next. It has finished its task when all parcels have been delivered.
* To be able to simulate this process, a virtual world must defined.This model tells us where the robot is and where the parcels are. When the robot has decided to move somewhere, we need to update the model to reflect the new situation.

**Instead** of impulsively following OOP and creating classes that define objects in the virtual world, I am going to condense the village’s state down to the minimal set of values that define it. There’s the robot’s current location and the collection of undelivered parcels, each of which has a current location and a destination address. That’s it!
