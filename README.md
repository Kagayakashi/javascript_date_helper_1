# Readme
This function parses a date format and corrects it for user-friendly usage.
It allows users to skip inputting certain parts of the date.
For instance, if the date format is 'yyyy-MM-dd HH:mm:ss', users can omit certain parts by only inputting the delimiters.
For example, inputting '-10- :13:' would result in the month being interpreted as 10, minutes as 13, while the remaining parts (year, day, hours, seconds) default to the current date values.

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
