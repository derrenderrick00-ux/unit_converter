print("Hello, welcome to the unit converter!")
userInput=input("Please enter the value you want to convert: ")
userInput=int(userInput)

conversionType=input("Please enter the conversion type ('cm to m', 'm to km', 'km to m' 'km to mi'): ")
while True:
    if conversionType == "cm to m":
        result = userInput / 100
        print(f"{userInput} cm is equal to {result} m")
        break
    elif conversionType == "m to km":
        result = userInput / 1000
        print(f"{userInput} m is equal to {result} km")
        break
    elif conversionType == "km to m":
        result = userInput * 1000
        print(f"{userInput} km is equal to {result} m")
        break
    elif conversionType == "km to mi":
        result = userInput * 0.621371
        print(f"{userInput} km is equal to {result} mi")
        break
    else:
        print("Invalid conversion type. Please try again.")
        conversionType=input("Please enter the conversion type (e.g., 'cm to m', 'm to km', 'kg to g'): ")
