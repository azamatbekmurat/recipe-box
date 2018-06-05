import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { Ingredient } from './models/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  currentFocus: string = 'Recipe Box for cooking';

  recipes: Recipe[] = [
    new Recipe('Steak',
            [
              new Ingredient('Meat'),
              new Ingredient('Onion'),
              new Ingredient('Flour'),
              new Ingredient('Potato'),
              new Ingredient('Garlic')
            ],
            'Sprinkle salt and pepper evenly over steaks. Heat a large cast-iron skillet over high heat. Add oil to pan; swirl to coat. Add steaks to pan; cook 3 minutes on each side or until browned. Reduce heat to medium-low; add butter, thyme, and garlic to pan. Carefully grasp pan handle using an oven mitt or folded dish towel. Tilt pan toward you so butter pools; cook 1 1/2 minutes, basting steaks with butter constantly. Remove steaks from pan; cover loosely with foil. Let stand 10 minutes. Reserve butter mixture'
    ),
    new Recipe('Cake',
            [
              new Ingredient('Flour'),
              new Ingredient('Sugar'),
              new Ingredient('Powder'),
              new Ingredient('Salt'),
              new Ingredient('Milk')
            ],
            'Heat the oven to 180C/350F/Gas 4. Line two 18cm/7in cake tins with baking parchment'
    )
  ];

}
