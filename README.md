# Covid incidence and cases

This app helps Chief Nursing Officer to understand details about Covid incidence and cases and they can act accordingly for patient needs. 

Please go ahead and play around  :)

## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design patten and proper folder structure Architecture && tried TDD approach)
  - **Execution** - App runs successfully in both Android and iOS
  - **Testability** - Used **Jest** for Unit testing and **Enzyme** for component testing.
  - **Code readability and style** - Written clean code and very convenient to read. Maintained proper comments and kept style files wisely. 
    (Tried to use all latest methods)

## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	remove **yarn.lock** file from download code

- Step 3 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Questions & Answers :

  ### 1. How long did you spend on the coding test? What would you add to your solution if you had more time?

      -  I spent around 8 hours for this coding test (due to high volume of work in my current company, I couldn’t spend more time on this coding test)

      -  If I would have get more time, I could implement search features to get the data based on search date in input field.
		     and mainly in current code I could improve some optimisations.
         
  ### 2. What alternative approaches/solutions to the user story did you consider when engineering your solution? What benefits/downsides would they have had compared to the     selected solution?

	-	As a mobile app, its should be easily understand and accessible to the user, so I selected the approach of doing it with section header with days selection, 
		user can select the days and see the data’s.

	-	I would have introduce various visual representations such as Line chart, etc for alternative approach.

	-	Benefits of current solution : Easy to understand by the user and they can view cases or incidence details based on individual date.

	-	Downsides of approach its like user have scroll down to see data’s. Should implement search feature for easy access (if I get more time)

  ### 3. What additional features/improvements do you think could help the customer gain more value from your application?

	-	Could have implement state, city dropdown list and can show data’s based on state, city.

	-	Line chart, Stacked Chart based on given data’s 
	
	-	Attractive UI, animations and Meaningful icons
      
  ### 4. Where do you see issues in your code that might cause issues in the future? How would you monitor the performance of your app?
  
	-	Flat list performances due to high volume of data’s in API responses. (Like 6 month data’s)
      
  ### 5.  How would you improve the API that you just used or its documentation?

	-	API document looks good. 

	-	It would be good to have date/month wise data’s.

	-	It we would get more data’s on individual case history like affected person location and status. So that we can show the details in the map like below website. 		( Example : Please refer below website https://www.outbreak.my/map )
        
  ### 6.  What did you think about this test? How interesting was it for you? How would you recommend us to improve the test?

	-	Its really helps to the Chief Nursing Officer to understand the cases and incidences.

	-	Coding test is very interesting and I feel its like more useful for the current scenario’s. (Covid-19 pandemic situation)

	-	Feels like helping Chief Nursing Officer to help more Patients with the use of this coding test.


## Happy coding ...
