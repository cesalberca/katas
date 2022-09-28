# Roman Numeral

Given a positive integer number (eg 42) determine its Roman numeral representation as a String (eg "XLII").

You cannot write numerals like IM for 999. Wikipedia states "Modern Roman numerals are written by expressing each arabic digit separately, starting with the leftmost digit, and skipping any digit with a value of zero."
For example:

1990 -> "MCMXC" (1000 -> "M" + 900 -> "CM" + 90 -> "XC")
2008 -> "MMVIII" (2000 -> "MM" + 8 -> "VIII")
99 -> "XCIX" (90 -> "XC" + 9 -> "IX")
47 -> "XLVII" (40 -> "XL" + 7 -> "VII")

The 'digits' are as follows:

"I" -> 1
"II" -> 2
"III" -> 3
"IV" -> 4
"V" -> 5
"VI" -> 6
"VII" -> 7
"VIII" -> 8
"IX" -> 9

"X" -> 10
"XX" -> 20
"XXX" -> 30
"XL" -> 40
"L" -> 50
"LX" -> 60
"LXX" -> 70
"LXXX" -> 80
"XC" -> 90

"C" -> 100
"CC" -> 200
"CCC" -> 300
"CD" -> 400
"D" -> 500
"DC" -> 600
"DCC" -> 700
"DCCC" -> 800
"CM" -> 900

"M" -> 1000
"MM" -> 2000
"MMM" -> 3000
"MMMM" -> 4000
