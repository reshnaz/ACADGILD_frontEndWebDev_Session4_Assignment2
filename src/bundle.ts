import { foodNamespace } from './interface';
import { fns } from './functionality';

// Creating object of class implementing interface
let nsObject = new fns();

// Invoking functions
foodNamespace.favoriteFood();
nsObject.dislikedFood();
