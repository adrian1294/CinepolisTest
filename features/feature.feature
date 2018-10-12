# Feature: Test
#    Scenario: Taylor Swift
#         Given we're in Wikipedia
#         When we type "Taylor Swift" in search tab
#         When we click "searchButton"
# Feature: Test
#     Scenario: Selenium
#     Given we're in Google
#     When we type "Selenium" in search tab
#     And we click "#hplogo"
#     And we click "#lsb"
@watch
Feature: Test
    Scenario: Cinepolis
        Given we're in Cinepolis
        When we click closeBtn
        And we click citysDropdown
        #Then we set the city "San Pedro"
        #Then we set the place "Cinépolis San Pedro"
        # Given we're in Cinepolis Cartelera San Pedro
        # When we set an set a range of hour between "" and ""

# Feature: Test Horario
    # Scenario: Cinepolis Cartelera
    #     Given we're in Cinepolis
    #     When we set the schedule