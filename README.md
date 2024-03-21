# Readme
Function for parsing date format and do date correction for User friendy usage.
With this function User can skip input some parts of date.
For example date format is "yyyy-MM-dd HH:mm:ss".
 User can skip parts by not input them, and just left only delimeter.
Input example: "-10- :13:".
Result will be that month is 10, minutes is 10, and for the rest is current date values (year, day, hours, seconds).

```javascript
/** USAGE
 * Supports mostly default formats:
 *  - yyyy-MM-dd
 *  - HH:mm:ss
 *  - yyyy-MM-dd HH:mm:ss
 *  - MM-dd-yyyy
 *  - dd.MM.YYYY
 *  - dd/MM/YYYY
 * and others.
 */

datetimeAutoCorrection("-10- :13:", "yyyy-MM-dd HH:mm:ss");
```
