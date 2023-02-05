# Exercise 1
students = ["Salman", "Ali","Juma", "Hussain", "Ahmed"]
print(students[1])
print(students[-1])

# Exercise 2
foods =('Pizza','Grilled Chicken', 'Lasagna', 'Machboos','Kebabs' )
for i in foods:
    print(f"{i} is good food")

# Exercise 3
for key, value in enumerate(foods):
    if (key == (len(foods)-1) or key == (len(foods)-2)):
        print(f"{value} is a good food.")

# Exercise 4
home_town = {
    'city': "Arcadia",
    'state': "California",
    'population': "58000"
}
print(f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}")

# Exercise 5
for key in home_town:
    print(f"{key} = {home_town[key]}")

# Exercise 6 
cohort = []
for i in range(len(students)):
    cohort.append({"student": students[i], 'fave_food': foods[i]})
# or
# cohort = [{"student": students[i], 'fave_food': foods[i]} for i in range(len(students))]    
 
for student in cohort:
    print(student)


# Exercise 7
awesome_students = [f"{i} is awesome" for i in students]

for x in awesome_students:
    print(x)


# Exercise 8
for y in [food for food in foods if ("a" in food)]:
    print(y)
    
        
