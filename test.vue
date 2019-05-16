Building APK for Production: 

1. Always update the version code. Google play store will not allowed used version code. 

To update update the "AndroidManifest.xml". Located under App->app-resources->Android->src->main

android:versionCode="10001" 
android:versionName="1.0.7"


2. Create Keystore file. Skip if already have and proceed to step 3. 


a. Open Terminal
- Create keystore file with the ff arguments (nsfinest,nsfinest.keystore)
bellow the command

`
keytool -genkey -alias nsfinest -keyalg RSA -keystore "c:\keystore\nsfinest.keystore" -validity 10000

keytool -genkey -alias nscomponents -keyalg RSA -keystore "c:\keystore\nscomponents.keystore" -validity 10000


note: make sure install java sdk and environment variable setup as: variable->sys variable->path-><location of keystore> ex: C:\Program Files\Java\jdk1.8.0_191\bin

Sample key / value: 



pass: ever->
john andrew asaria
finest
finest
iloilo
iloilo
PH
everafter





3. Run nativescript command for building. Change value parameter for each project.

tns build android --bundle --release --key-store-path C:\keystore\nscomponents.keystore --key-store-password everafter --key-store-alias nscomponents --key-store-alias-password everafter



