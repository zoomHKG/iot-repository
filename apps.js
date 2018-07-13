
/*
 ***** ACTIVE Apps
 * ***********************
 *
 * file a pull request to add your own IoT App to the repository
 *
 *
 **** README
 * ***********
 *
 * KEY:         The project name. (e.g.: "temp-sensor" would give your app URL <TBD>/temp-sensor)
 *
 * VALUE:       An object with the following keys
 *              
 *              device:           The device for which the binary is built for.
 *              
 *              version:          The app version.
 * 
 *              url:              The URL to the binary file of your app.
 * 
 *              description:      A brief description about your project.
 *
 *
 * IMPORTANT:   To authorize your app to the repository, you must have added a valid url.
 *
 * NOTICE:      It would be nice if you could keep the alphabetical order.
 *
 *              BECAUSE OF THE RISK OF ABUSE, I´M NOT ACCEPTING REQUESTS FOR PAGES WITHOUT REASONABLE DESCRIPTION!
 */

const apps = {
  "test": {
    "device": "esp8266",
    "version": "v0.0.1",
    "url": "https://github.com/rpidanny/assets/raw/master/iot-apps/blink-esp8266.bin",
    "description": "Blink!"
  }
  /*
  * please don"t add your app records down here!
  * insert them in alphabetical order to help reduce merge conflicts.
  * <3
  */
}
