/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {
        user_uid: "RrMVG5lDkzV5QGuQ4D1FVvP9Z693",
        title: "Classic chili",
        servings: 6,
        hours: 0,
        minutes: 40,
        description: "Homecooked, classic chili recipe. Delicious as is, or even better served over rice or with crackers. Feel free to add your topics. I like it with cheese and sour cream.",
        instructions: "1) dice the onion.\n2) add the olive oil into a large pot over medium-high heat.\n3) add the onion and cook for 5 minutes, stir occasionally.\n4) add the ground beef to the pot. break it apart with a spoon and cook until the beef is browned, 6-7 minutes\ntip: I like to let the beef firmly brown on one side until a little crispy before breaking it apart. It adds to the flavor of the beef.\n5) add the chili powder, cumin, sugar, tomato paste, garlic paste, salt, pepper, and cayenne pepper. Stir until fully combined.\n6) Add the beef broth, canned tomatoes (with juices), drained beans, and tomato sauce. Stir\n7) Bring the chili to a low boil then reduce heat (low to medium-low) to a gently simmer, uncovered, for 20-25 minutes. stir occasionally.\n8) Once done, let the chili rest for 5-10 minutes before serving.\n9) Serve with you favorite toppings or as is.",
        ingredients: JSON.stringify([
            {
                "name": "olive oil",
                "quantity": 1,
                "unit": "tablespoon",
                "calories": 119.34,
                "protein": 0,
                "carbohydrates": 0
            },
            {
                "name": "yellow onion",
                "quantity": 1,
                "unit": "medium",
                "calories": 41.36,
                "protein": 1.28,
                "carbohydrates": 9.54
            },
            {
                "name": "ground beef",
                "quantity": 1,
                "unit": "pound",
                "calories": 1233.77,
                "protein": 122.47,
                "carbohydrates": 0
            },
            {
                "name": "chili powder",
                "quantity": 2.5,
                "unit": "tablespoons",
                "calories": 56.75,
                "protein": 2.71,
                "carbohydrates": 10
            },
            {
                "name": "ground cumin",
                "quantity": 2,
                "unit": "tablespoons",
                "calories": 46.12,
                "protein": 2.19,
                "carbohydrates": 5.44
            },
            {
                "name": "sugar",
                "quantity": 2,
                "unit": "tablespoons",
                "calories": 97.14,
                "protein": 0,
                "carbohydrates": 25.09
            },
            {
                "name": "tomato paste",
                "quantity": 2,
                "unit": "tablespoons",
                "calories": 26.72,
                "protein": 1.41,
                "carbohydrates": 6.16
            },
            {
                "name": "garlic paste",
                "quantity": 1,
                "unit": "tablespoons",
                "calories": 81.95,
                "protein": 0.67,
                "carbohydrates": 3.47
            },
            {
                "name": "salt",
                "quantity": 1.5,
                "unit": "teaspoons",
                "calories": 0,
                "protein": 0,
                "carbohydrates": 0
            },
            {
                "name": "ground black pepper",
                "quantity": 0.5,
                "unit": "teaspoons",
                "calories": 2.6,
                "protein": 0.11,
                "carbohydrates": 0.66
            },
            {
                "name": "cayenne pepper",
                "quantity": 0.25,
                "unit": "teaspoons",
                "calories": 1.42,
                "protein": 0.05,
                "carbohydrates": 0.25
            },
            {
                "name": "beef broth",
                "quantity": 1.5,
                "unit": "cups",
                "calories": 25.2,
                "protein": 4.1,
                "carbohydrates": 0.14
            },
            {
                "name": "diced tomatoes",
                "quantity": 15,
                "unit": "ounces",
                "calories": 68.04,
                "protein": 3.36,
                "carbohydrates": 14.76
            },
            {
                "name": "red kidney beans",
                "quantity": 16,
                "unit": "ounces",
                "calories": 576.07,
                "protein": 39.33,
                "carbohydrates": 103.42
            },
            {
                "name": "canned tomato sauce",
                "quantity": 8,
                "unit": "ounces",
                "calories": 58.79,
                "protein": 2.94,
                "carbohydrates": 13.01
            }
        ]),
        is_public: true,
        total_calories: 2435.27,
        total_protein: 180.62,
        total_carbohydrates: 191.94,
        calories_per_serving: 405.87833
    },
    {
        user_uid: "2MrUl3VgcsbOvJfbzegfiVLaEmf2",
        title: "Broccoli cheese soup",
        servings: 6,
        hours: 0,
        minutes: 45,
        description: "Classic broccoli and cheese soup, prefect for a cold day",
        instructions: "1) sauté onions, pepper, red pepper flakes and bacon\n2) add chicken broth, bring to boil\n3) add broccoli, bring to a boil\n4) add Velveeta, melt cheese\n5) once broccoli is cooked to your liking add heavy whipping cream and remove from heat",
        ingredients: JSON.stringify([
            {
                "name": "broccoli",
                "quantity": 1.5,
                "unit": "pounds",
                "calories": 238.14,
                "protein": 16.19,
                "carbohydrates": 48.85
            },
            {
                "name": "chicken broth",
                "quantity": 8,
                "unit": "cups",
                "calories": 119.52,
                "protein": 12.75,
                "carbohydrates": 8.76
            },
            {
                "name": "onion",
                "quantity": 1,
                "unit": "medium",
                "calories": 41.36,
                "protein": 1.28,
                "carbohydrates": 9.54
            },
            {
                "name": "black pepper",
                "quantity": 1,
                "unit": "teaspoon",
                "calories": 5.21,
                "protein": 0.22,
                "carbohydrates": 1.33
            },
            {
                "name": "red pepper flakes",
                "quantity": 1,
                "unit": "teaspoon",
                "calories": 5.67,
                "protein": 0.21,
                "carbohydrates": 1.01
            },
            {
                "name": "velveeta",
                "quantity": 6,
                "unit": "ounces",
                "calories": 509.04,
                "protein": 27.38,
                "carbohydrates": 16.46
            },
            {
                "name": "heavy whipping cream",
                "quantity": 1,
                "unit": "cup",
                "calories": 809.2,
                "protein": 6.76,
                "carbohydrates": 6.52
            },
            {
                "name": "bacon bits",
                "quantity": 1,
                "unit": "cup",
                "calories": 533.12,
                "protein": 35.84,
                "carbohydrates": 32.03
            }
        ]),
        is_public: true,
        total_calories: 2261.26,
        total_protein: 100.63,
        total_carbohydrates: 124.5,
        calories_per_serving: 376.87668
    },
    {
        user_uid: "4PeZ9Kx5YrPBjoetjMpzi8k6zwH2",
        title: "Buffalo chicken dip",
        servings: 8,
        hours: 0,
        minutes: 30,
        description: "Use as a dip with tortilla chips, to top a pizza crust or with pits chips.",
        instructions: "Add either canned chicken or cubed cooked chicken with other ingredients on stove. Warm at medium heat, stirring frequently until all ingredients are mixed and hot.",
        ingredients: JSON.stringify([
            {
                "name": "chicken",
                "quantity": 1,
                "unit": "lbs",
                "calories": 997.9,
                "protein": 108.68,
                "carbohydrates": 0.23
            },
            {
                "name": "ranch dressing",
                "quantity": 1,
                "unit": "cup",
                "calories": 1032,
                "protein": 3.17,
                "carbohydrates": 14.16
            },
            {
                "name": "cream cheese",
                "quantity": 12,
                "unit": "oz",
                "calories": 1190.7,
                "protein": 20.92,
                "carbohydrates": 18.78
            },
            {
                "name": "buffalo chicken dip",
                "quantity": 1,
                "unit": "cup",
                "calories": 609.42,
                "protein": 23.67,
                "carbohydrates": 19.53
            },
            {
                "name": "mozzarella shredded cheese",
                "quantity": 1,
                "unit": "cup",
                "calories": 261.44,
                "protein": 20.32,
                "carbohydrates": 6.93
            }
        ]),
        is_public: true,
        total_calories: 4091.46,
        total_protein: 176.76,
        total_carbohydrates: 59.63,
        calories_per_serving: 511.4325
    },
    {
        user_uid: "2MrUl3VgcsbOvJfbzegfiVLaEmf2",
        title: "Corn Cassarole",
        servings: 6,
        hours: 1,
        minutes: 0,
        description: "Creamy macaroni and cheese with a corn twist.",
        instructions: "Pre heat oven to 350°\nIn a large casserole dish\nAdd\n8 oz of large elbow macaroni \n2 can of whole kernel corn undrained\n2 cans of cream corn\n8 oz of Velveeta cheese cubed\n4 oz 2 % milk\nSeason to taste with salt and pepper\nMix together \nCover and bake in oven for 30 minute\nStir, uncover, and cook for another 30 minutes.\nRemove from oven and serve.  ",
        ingredients: JSON.stringify([
            {
                "name": "corn",
                "quantity": 16.75,
                "unit": "oz",
                "calories": 455.87,
                "protein": 16.19,
                "carbohydrates": 99.63
            },
            {
                "name": "cream corn",
                "quantity": 16.75,
                "unit": "oz",
                "calories": 341.9,
                "protein": 8.26,
                "carbohydrates": 86.09
            },
            {
                "name": "velveeta",
                "quantity": 8,
                "unit": "oz",
                "calories": 678.72,
                "protein": 36.51,
                "carbohydrates": 21.95
            },
            {
                "name": "2% milk",
                "quantity": 4,
                "unit": "oz",
                "calories": 61,
                "protein": 4.03,
                "carbohydrates": 5.86
            },
            {
                "name": "elbow macaroni",
                "quantity": 8,
                "unit": "oz",
                "calories": 358.34,
                "protein": 13.15,
                "carbohydrates": 69.99
            },
            {
                "name": "salt",
                "quantity": 2,
                "unit": "pinch",
                "calories": 0,
                "protein": 0,
                "carbohydrates": 0
            },
            {
                "name": "pepper",
                "quantity": 1,
                "unit": "pinch",
                "calories": 0.33,
                "protein": 0.01,
                "carbohydrates": 0.08
            }
        ]),
        is_public: true,
        total_calories: 1896.16,
        total_protein: 78.15,
        total_carbohydrates: 283.6,
        calories_per_serving: 316.02667
    }
]);
};
