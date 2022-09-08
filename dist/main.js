/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/createController.js":
/*!*********************************!*\
  !*** ./src/createController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createController": () => (/* binding */ createController)
/* harmony export */ });
/* harmony import */ var _toDoController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoController.js */ "./src/toDoController.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subTaskController.js */ "./src/subTaskController.js");
/* harmony import */ var _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/displayController.js */ "./src/ui/displayController.js");
/* harmony import */ var _storageController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storageController.js */ "./src/storageController.js");






const createController = (function(){
    let items = [];
    let currentItems = items;
    

    function getCurrentItems(){
        return currentItems;
    }

    function setCurrentItems(newArray){
        currentItems = newArray;
    }

    function createToDo(title, description, priority, date){
        let newToDo = {type: 'toDo', title, description, priority, date, complete: false}

        newToDo.itemId = items.length;
        items.push(newToDo);

        newToDo.toDoId = _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.getLength()

        _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.create(newToDo)
        return newToDo
    }

    function createProject(title){
        let newProject = {type: 'project', title, subTasks: [], complete: false, completeTasks: 0, percentage: 0}

        newProject.itemId = items.length;
        items.push(newProject);

        newProject.projectId = _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.getLength();

        _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.create(newProject);

        console.log(items)
        return newProject
    }

    function createSubTask(project, title, description, priority, date){
        const parentId = project.itemId;
        let newSubTask = {type: 'subTask', parentId, title, description, priority, date, complete: false};
        newSubTask.itemId = items.length
        items.push(newSubTask);

        newSubTask.subTaskId = _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.getLength()

        _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.create(newSubTask);
        return newSubTask
    }

    function findItem(id){
        const foundItem = items.find(i => i.itemId == id);
        return foundItem
    }

    function logItems(){
        console.log(items)
    }

    function removeSubTask(subTask){
        items.splice(items.indexOf(items.find( i => i.itemId ===subTask.itemId)), 1)
        _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.remove(subTask)
        _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__.displayController.renderDash()
    }

    function removeProject(project){
        if(project.subTasks){
            project.subTasks.forEach(task =>{
                removeSubTask(task);
            })
    
        }
        items.splice(items.indexOf(items.find( i => i.itemId ===project.itemId)), 1)

        _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.remove(project)
        _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__.displayController.renderDash()
    }

    function removeToDo(toDo){
        items.splice(items.indexOf(items.find( i => i.itemId ===toDo.itemId)), 1)
        _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.remove(toDo)
        _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__.displayController.renderDash()
    }

    function getItems(){
        return items;
    }

    function loadItems(newItems){
        items = newItems
    }

    return{
        findItem,
        logItems,
        createToDo,
        createProject,
        createSubTask,
        removeSubTask,
        getItems,
        removeProject,
        removeToDo,
        loadItems,
        setCurrentItems,
        getCurrentItems,
    }
})();



/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");


const projectController = (function() {
    let projects = [];

    function getLength(){
        return projects.length;
    }

    function create(project){
        projects.push(project)
    }

    function remove(project){
        projects.splice(projects.indexOf(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(project)), 1)
    }

    function getProjects(){
        return projects;
    }

    function loadProjects(newItems){
        projects = newItems
    }

    return{
        getLength,
        create,
        remove,
        getProjects,
        loadProjects
    }
})();



/***/ }),

/***/ "./src/searchController.js":
/*!*********************************!*\
  !*** ./src/searchController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchController": () => (/* binding */ searchController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");
/* harmony import */ var _ui_displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/displayController */ "./src/ui/displayController.js");



const searchController = (function(){
    function search(text){
        if(text==false){
            _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()
        }else{
            const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getCurrentItems();
            const itemFilteredTitle = items.filter( i=> i.title.toLowerCase().includes(text.toLowerCase()) );
            const itemFilteredDescType = items.filter( i=> (i.type === 'subTask') || (i.type === 'toDo'))
            const itemFilteredDesc = itemFilteredDescType.filter( i=> i.description.toLowerCase().includes(text.toLowerCase()));

            itemFilteredDesc.forEach(item => {
                if(itemFilteredTitle.includes(item)){
                    itemFilteredDesc.splice(itemFilteredDesc.indexOf(item),1)
                }
            })

            const filteredItems = itemFilteredTitle.concat(itemFilteredDesc)

            console.log(filteredItems)

            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.setCurrentItems(filteredItems);
            _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash(true)
        }
    }

    return {
        search
    }
})();



/***/ }),

/***/ "./src/sortController.js":
/*!*******************************!*\
  !*** ./src/sortController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortController": () => (/* binding */ sortController)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");
/* harmony import */ var _ui_displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/displayController */ "./src/ui/displayController.js");




const sortController = (function(){
    function itemsToday(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems();
        const itemsToday = [];

        items.forEach(item => {
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(item.date))){
                itemsToday.push(item);
                if(item.type === 'subTask'){
                    const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(item.parentId);

                    itemsToday.push(project);
                }
            }
        })

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.setCurrentItems(itemsToday)
    }

    function itemsThisWeek(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems();
        const itemsThisWeek = [];

        items.forEach(item => {
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(item.date))){
                itemsThisWeek.push(item);

                if(item.type === 'subTask'){
                    const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(item.parentId);

                    itemsThisWeek.push(project);
                }
            }
        })

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.setCurrentItems(itemsThisWeek)

    }

    function defaultDash(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems();
        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.setCurrentItems(items);

    }

    function projects(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems();
        const projects = [];

        items.forEach(item => {
            if(item.type === 'project'){
                projects.push(item);

                if(item.type === 'subTask'){
                    const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(item.parentId);

                    projects.push(project);
                }
            }
        })

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.setCurrentItems(projects)

    }

    function toDos(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems();
        const toDos = [];

        items.forEach(item => {
            if(item.type === 'toDo'){
                toDos.push(item);

                if(item.type === 'subTask'){
                    const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(item.parentId);

                    toDos.push(project);
                }
            }
        })

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.setCurrentItems(toDos)

    }


    return { itemsToday,
            defaultDash,
            itemsThisWeek,
            projects,
            toDos}
})();



/***/ }),

/***/ "./src/storageController.js":
/*!**********************************!*\
  !*** ./src/storageController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageController": () => (/* binding */ storageController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");
/* harmony import */ var _toDoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoController */ "./src/toDoController.js");
/* harmony import */ var _subTaskController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subTaskController */ "./src/subTaskController.js");






const storageController = (function(){
    function saveAll(){
        window.localStorage.clear()
        saveItems();
    }

    function loadAll(){
        if (localStorage.hasOwnProperty('items')) {
            loadItems();
            loadProjects();
            loadSubTasks();
            loadToDos();
        } else{
            const sampleProj1 = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createProject('Kitchen Cleanup');
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj1, 'Clean dishes', 'In the sink from last night', 'high', '2022-08-28')
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj1, 'Mop the floor', 'Mop is in the utility room', 'medium', '2022-08-30')

            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Feed the dog', 'Dry food in the pantry', 'low', '2022-09-03')
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Clean the bathroom', 'Supplies in cupboard', 'high', '2022-09-02')

            const sampleProj2 = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createProject('School Projects');
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj2, 'Geography Research Study', 'On volcanoes and economic impacts', 'high', '2022-08-28')
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj2, 'Science Lab Report', 'Effects of salt in drinking water', 'low', '2022-08-30')

            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Finish To-do app', 'Almost done', 'medium', '2022-09-11')
        }
    }

    function saveItems(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems()
        window.localStorage.setItem('items', JSON.stringify(items))
    }

    function loadItems(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.loadItems(items)
    }

    function loadProjects(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        const projects = items.filter(i => i.type === 'project');
        _projectController__WEBPACK_IMPORTED_MODULE_1__.projectController.loadProjects(projects)
    }

    function loadToDos(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        const toDos = items.filter(i => i.type === 'toDo');
        _toDoController__WEBPACK_IMPORTED_MODULE_2__.toDoController.loadToDos(toDos)
    }

    function loadSubTasks(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        const subTasks = items.filter(i => i.type === 'subTask');
        _subTaskController__WEBPACK_IMPORTED_MODULE_3__.subTaskController.loadSubTasks(subTasks)
    }

    return{
        saveAll,
        loadAll
    }
})();



/***/ }),

/***/ "./src/subTaskController.js":
/*!**********************************!*\
  !*** ./src/subTaskController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subTaskController": () => (/* binding */ subTaskController)
/* harmony export */ });
/* harmony import */ var _ui_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/displayController */ "./src/ui/displayController.js");
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createController */ "./src/createController.js");



const subTaskController = (function() {
    let subTasks = [];

    function getLength(){
        return subTasks.length;
    }

    function create(subTask){
        const projectToAddTo = _createController__WEBPACK_IMPORTED_MODULE_1__.createController.findItem(subTask.parentId);
        subTasks.push(subTask);

        projectToAddTo.subTasks.push(subTask)
    }

    function remove(subTask){
        subTasks.splice(subTasks.indexOf(subTasks.find(i => i.itemId === subTask.itemId)), 1)
        const parentProject = _createController__WEBPACK_IMPORTED_MODULE_1__.createController.findItem(subTask.parentId);
        console.log(parentProject)
        if(subTask.complete == true){
            parentProject.completeTasks = parentProject.completeTasks--;
        }
        const indexOfTask = parentProject.subTasks.indexOf(parentProject.subTasks.find(i => i.id === subTask.id));

        parentProject.subTasks.splice(parentProject.subTasks.indexOf(parentProject.subTasks.find(i => i.itemId === subTask.itemId)),1);

    }

    function getSubTasks(){
        return subTasks;
    }

    function loadSubTasks(newItems){
        subTasks = newItems
    }


    return{
        getLength,
        create,
        remove,
        getSubTasks,
        loadSubTasks,
        subTasks
    }
})();



/***/ }),

/***/ "./src/toDoController.js":
/*!*******************************!*\
  !*** ./src/toDoController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoController": () => (/* binding */ toDoController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");


const toDoController = (function() {
    let toDos = [];

    function getLength() {
        return toDos.length
    }

    function create(toDo){
        toDos.push(toDo)
    }

    function remove(toDo){
        toDos.splice(toDos.indexOf(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDo)), 1)
    }

    function getToDos(){
        return toDos;
    }

    function loadToDos(newItems){
        toDos = newItems
    }

    function findItem(itemIds){
        return toDos.find( i => i.itemId === itemIds)
    }


    return{
        create,
        getLength,
        remove,
        getToDos,
        loadToDos,
        findItem
    }
})();



/***/ }),

/***/ "./src/ui/displayController.js":
/*!*************************************!*\
  !*** ./src/ui/displayController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createController */ "./src/createController.js");
/* harmony import */ var _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-items/createItemUI */ "./src/ui/ui-items/createItemUI.js");
/* harmony import */ var _ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-items/createProjectCard */ "./src/ui/ui-items/createProjectCard.js");
/* harmony import */ var _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-items/createSubTaskUI */ "./src/ui/ui-items/createSubTaskUI.js");
/* harmony import */ var _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-items/createToDoCard */ "./src/ui/ui-items/createToDoCard.js");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storageController */ "./src/storageController.js");
/* harmony import */ var _sortController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sortController */ "./src/sortController.js");

 







const displayController = (function(){
    const $contentDiv = document.querySelector('div#content');
    const $cardContainer = document.querySelector('div#cardContainer');

    function createItemPopup(){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        let $header = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createHeader();
        let $formBody = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createFormBody();
        let $create = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createCreateButton();
        let $exit = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createExitButton();

        $createTaskPopupContainer.appendChild($header)
        $createTaskPopupContainer.appendChild($formBody)
        $createTaskPopupContainer.appendChild($create)
        $createTaskPopupContainer.appendChild($exit)

        $contentDiv.appendChild($createTaskPopupContainer)
    }

    function closeCreateItemPopup(){
        const $createTaskPopupContainer = document.querySelector('div.createTaskPopup');

        $createTaskPopupContainer.replaceChildren();
        $createTaskPopupContainer.remove()
    }

    function createProject(project){
        project.completeTasks = 0
        project.subTasks.forEach(task => {
            if(task.complete === true){
                project.completeTasks++
            }
        })

        const $container = _ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createContainer(project);
        $cardContainer.appendChild($container);
        const $subTasks = _ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createSubTasks(project);
        $container.appendChild($subTasks);
        const $bottomControls = document.createElement('div');
        $bottomControls.classList.add('bottomInfo')
        $bottomControls.appendChild(_ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createAddButton(project))
        $bottomControls.appendChild(_ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createPercentage(project))
        $bottomControls.appendChild(_ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createRemoveButton(project))

        $container.appendChild($bottomControls)
    }

    function createToDo(toDo){
        const $container = _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__.createToDoCard.createContainer(toDo);
        $cardContainer.appendChild($container);

        const $bottomControls = document.createElement('div');
        $bottomControls.classList.add('bottomControls');
        const $removeButton = _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__.createToDoCard.createRemoveButton(toDo);
        const $checkBox = _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__.createToDoCard.createCheckBox(toDo);

        if(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDo.itemId).complete === true){
            $checkBox.checked = true;
        } else{
            $checkBox.checked = false;
        }

        _storageController__WEBPACK_IMPORTED_MODULE_5__.storageController.saveAll()

        $bottomControls.appendChild($checkBox);
        $bottomControls.appendChild($removeButton);

        $container.appendChild($bottomControls)
    }

    function renderDash(filtered = false){
        const $contentTitle = document.querySelector('div#content h1');
        if (filtered === false){
            if($contentTitle.textContent === 'Dashboard'){
                _sortController__WEBPACK_IMPORTED_MODULE_6__.sortController.defaultDash();
            } else if($contentTitle.textContent === 'Today'){
                _sortController__WEBPACK_IMPORTED_MODULE_6__.sortController.itemsToday();
            } else if($contentTitle.textContent === 'This Week'){
                _sortController__WEBPACK_IMPORTED_MODULE_6__.sortController.itemsThisWeek();
            } else if($contentTitle.textContent === 'Projects'){
                _sortController__WEBPACK_IMPORTED_MODULE_6__.sortController.projects();
            } else if($contentTitle.textContent === 'ToDos'){
                _sortController__WEBPACK_IMPORTED_MODULE_6__.sortController.toDos();
            }
        }

        const itemArray = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getCurrentItems()
        cleanDash()

        itemArray.forEach(item =>{
            if(item.type == 'project'){
                createProject(item);
            } else if(item.type == 'toDo'){
                createToDo(item);
            }
        })

        _storageController__WEBPACK_IMPORTED_MODULE_5__.storageController.saveAll();
    }

    function cleanDash(){
        $cardContainer.innerHTML = '';
    }

    function createSubTaskPopup(project){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        let $header = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createHeader();
        let $formBody = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createFormBody();
        let $create = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createCreateButton(project);
        let $exit = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createExitButton();

        $createTaskPopupContainer.appendChild($header);
        $createTaskPopupContainer.appendChild($formBody);
        $createTaskPopupContainer.appendChild($create);
        $createTaskPopupContainer.appendChild($exit);

        $contentDiv.appendChild($createTaskPopupContainer);
    }


    return{
        createItemPopup,
        closeCreateItemPopup,
        createProject,
        renderDash,
        createSubTaskPopup
    }
})()




/***/ }),

/***/ "./src/ui/inputController.js":
/*!***********************************!*\
  !*** ./src/ui/inputController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputController": () => (/* binding */ inputController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createController */ "./src/createController.js");
/* harmony import */ var _sortController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sortController */ "./src/sortController.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/ui/displayController.js");




const inputController = (function(){
    function parseCreateItem(){
        const type = document.querySelector('input[name="type"]:checked').value;
        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        if(type === 'project'){
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createProject(title)
        } else if(type === 'toDo'){
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo(title, description, priority, date)
        } else{
            return
        }

        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.renderDash();

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.logItems();
    }

    function parseCreateSubTask(project){
        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(project, title,description, priority, date)

        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.renderDash();

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.logItems()
    }

    return{
        parseCreateItem,
        parseCreateSubTask
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createItemUI.js":
/*!*****************************************!*\
  !*** ./src/ui/ui-items/createItemUI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItemUI": () => (/* binding */ createItemUI)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayController */ "./src/ui/displayController.js");
/* harmony import */ var _inputController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputController */ "./src/ui/inputController.js");



const createItemUI = (function(){
    function createHeader(){
        const $h2 = document.createElement('h2');
        $h2.textContent='Create an Item';
        
        return $h2
    }


    function createFormBody(){
        const $form = document.createElement('form');

        $form.innerHTML = `
            <div class="formInputContainer">
                <label for="priority">Type</label>

            <div class="radioContainer">
                <input type="radio" name="type" value="toDo">
                <input type="radio" name="type" value="project">  
            </div>
            <div class="labelRadioContainer">
                <label for="toDo">ToDo</label>
                <label for="project">Project</label>
            </div>
        </div>
        

        <div class="formInputContainer">
                <label for="title">Title</label>
                <input type="text" name="title">
            </div>

            <div class="formInputContainer">
                <label for="description">Description</label>
                <input type="text" name="description">
            </div>

            <div class="formInputContainer">
                <label for="date">Due</label>
                    <input type="date" name="date">
            </div>

            <div class="formInputContainer">
                <label for="priority">Priority</label>

            <div class="radioContainer">
                <input type="radio" name="priority" value="high">
                <input type="radio" name="priority" value="medium">
                <input type="radio" name="priority" value="low">    
            </div>
            <div class="labelRadioContainer">
                <label for="high">High</label>
                <label for="medium">Medium</label>
                <label for="low">Low</label>
            </div>
        </div>`

        return $form
    }

    function createCreateButton(){
        let $createButton = document.createElement('p')
        $createButton.id = 'button'
        $createButton.textContent = 'Create Item';

        $createButton.addEventListener('click', (e) => {
            _inputController__WEBPACK_IMPORTED_MODULE_1__.inputController.parseCreateItem();
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $createButton
    }

    function createExitButton(){
        let $closeButton = document.createElement('p')
        $closeButton.id = 'remButton'
        $closeButton.textContent = 'Exit';

        $closeButton.addEventListener('click', (e) => {
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $closeButton
    }

    return{
        createFormBody,
        createHeader,
        createCreateButton,
        createExitButton
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createProjectCard.js":
/*!**********************************************!*\
  !*** ./src/ui/ui-items/createProjectCard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createController */ "./src/createController.js");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storageController */ "./src/storageController.js");
/* harmony import */ var _subTaskController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../subTaskController */ "./src/subTaskController.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../displayController */ "./src/ui/displayController.js");






const createProjectCard = (function(){
    function createContainer(project){
        const $projectCardContainer = document.createElement('div')
        $projectCardContainer.id = project.itemId
        $projectCardContainer.classList.add('card');
        $projectCardContainer.classList.add('project');

        $projectCardContainer.innerHTML = `<h2>${project.title}</h2>
                <div class="projectTaskContainer" id='${project.itemId}'>

                </div>
                </div>`

        return $projectCardContainer
    }

    function createSubTasks(project){
        const $projectTaskContainer = document.querySelector(`div.projectTaskContainer[id='${project.itemId}']`);

        project.subTasks.forEach(subTask => {
            const $projectTask = document.createElement('div');
            $projectTask.classList.add('projectTask');
            $projectTask.id = subTask.itemId;

            let circleColour = "";

            if(subTask.priority === 'high'){
                circleColour = '#ff6e6e';
            } else if(subTask.priority === 'medium'){
                circleColour = '#ffb46e';
            } else if(subTask.priority === 'low'){
                circleColour = '#fdff8d';
            }

            $projectTask.innerHTML = `
            <div id="colourCircle" style='background-color:${circleColour};'>&nbsp;</div>
            <div class="taskText">
                            <div class="topTask">
                                <p class="title">${subTask.title}</p>
                                <p class="date">${subTask.date}</p>
                            </div>
                            <div class="bottomTask">
                                <p>${subTask.description}</p>
                            </div>
                        </div>
                        <img src="./images/trash-2.svg" class="trash" id='${subTask.itemId}'>

                        <input type="checkbox" id='${subTask.itemId}'>
            `

            $projectTaskContainer.appendChild($projectTask)
            const $checkBox = $projectTask.querySelector(`input`);

            if(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTask.itemId).complete === true){
                $checkBox.checked = true;
                $projectTask.classList.add('complete');
            }

            const $trashButton = $projectTask.querySelector(`img`);

            $trashButton.addEventListener('click', (e) => {
                let taskId = e.target.id

                console.log('removing')
                let taskToRem = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(taskId);

                console.log(taskToRem)
                _createController__WEBPACK_IMPORTED_MODULE_0__.createController.removeSubTask(taskToRem)
            })

            $checkBox.addEventListener('change', (e) =>{
                let subTaskId = e.target.id
                let subTask = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTaskId)
                let projectParent = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTask.parentId);

                if((_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTaskId)).complete === true){
                    _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTaskId).complete = false;
                    if(e.target.parentNode.classList.contains('complete')){
                        e.target.parentNode.classList.remove('complete');
                        projectParent.completeTasks--

                        projectParent.percentage = (projectParent.completeTasks / projectParent.subTasks.length) *100
                        const $percentage = e.target.parentNode.parentNode.parentNode.querySelector('h3')
                        $percentage.textContent = Math.floor(projectParent.percentage) + '%'
                    }
                } else if((_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTaskId)).complete === false){
                    _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTaskId).complete = true;
                    e.target.parentNode.classList.add('complete')
                    projectParent.completeTasks++

                    projectParent.percentage = (projectParent.completeTasks / projectParent.subTasks.length) *100

                    const $percentage = e.target.parentNode.parentNode.parentNode.querySelector('h3')
                    $percentage.textContent = Math.floor(projectParent.percentage) + '%'
                }
                console.log('updating')

                console.log(subTask)

                _storageController__WEBPACK_IMPORTED_MODULE_1__.storageController.saveAll()
            })
        })

    return $projectTaskContainer
    }

    function createPercentage(project){
        const $percentage = document.createElement('h3');
        
        if(project.subTasks.length){
            project.percentage = Math.floor((project.completeTasks / project.subTasks.length) *100)
        } else{
            project.percentage = 0;
        }
        $percentage.textContent = project.percentage + '%'

        return $percentage
    }

    function createAddButton(project){
        let $but = document.createElement('img');
        $but.src='./images/plus-circle.svg';
        $but.classList.add('addTaskButton')

        $but.addEventListener('click', (e) => {
            console.log('addclick')
            const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(e.target.parentNode.parentNode.id);

            _displayController__WEBPACK_IMPORTED_MODULE_3__.displayController.createSubTaskPopup(project)
        })

        return $but
    }

    function createRemoveButton(project){
        let $rbut = document.createElement('img');
        $rbut.src='./images/trash-2.svg';
        $rbut.classList.add('removeProjectButton')

        $rbut.addEventListener('click', (e) =>{
            const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(e.target.parentNode.parentNode.id);

            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.removeProject(project)
        })

        return $rbut
    }

    return{
        createContainer,
        createSubTasks,
        createPercentage,
        createAddButton,
        createRemoveButton
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createSubTaskUI.js":
/*!********************************************!*\
  !*** ./src/ui/ui-items/createSubTaskUI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubTaskUI": () => (/* binding */ createSubTaskUI)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayController */ "./src/ui/displayController.js");
/* harmony import */ var _inputController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputController */ "./src/ui/inputController.js");



const createSubTaskUI = (function(){
    function createHeader(){
        const $h2 = document.createElement('h2');
        $h2.textContent='Create a subtask';
        
        return $h2
    }


    function createFormBody(){
        const $form = document.createElement('form');

        $form.innerHTML = `
        <div class="formInputContainer">
                <label for="title">Title</label>
                <input type="text" name="title">
            </div>

            <div class="formInputContainer">
                <label for="description">Description</label>
                <input type="text" name="description">
            </div>

            <div class="formInputContainer">
                <label for="date">Due</label>
                    <input type="date" name="date">
            </div>

            <div class="formInputContainer">
                <label for="priority">Priority</label>

            <div class="radioContainer">
                <input type="radio" name="priority" value="high">
                <input type="radio" name="priority" value="medium">
                <input type="radio" name="priority" value="low">    
            </div>
            <div class="labelRadioContainer">
                <label for="high">High</label>
                <label for="medium">Medium</label>
                <label for="low">Low</label>
            </div>
        </div>`

        return $form
    }

    function createCreateButton(project){
        let $createButton = document.createElement('p')
        $createButton.id = 'button'
        $createButton.textContent = 'Create subtask';

        $createButton.addEventListener('click', (e) => {
            _inputController__WEBPACK_IMPORTED_MODULE_1__.inputController.parseCreateSubTask(project);
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $createButton
    }

    function createExitButton(){
        let $closeButton = document.createElement('p')
        $closeButton.id = 'remButton'
        $closeButton.textContent = 'Exit';

        $closeButton.addEventListener('click', (e) => {
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $closeButton
    }

    return{
        createFormBody,
        createHeader,
        createCreateButton,
        createExitButton
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createToDoCard.js":
/*!*******************************************!*\
  !*** ./src/ui/ui-items/createToDoCard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDoCard": () => (/* binding */ createToDoCard)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createController */ "./src/createController.js");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storageController */ "./src/storageController.js");
/* harmony import */ var _subTaskController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../subTaskController */ "./src/subTaskController.js");
/* harmony import */ var _toDoController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDoController */ "./src/toDoController.js");





const createToDoCard = (function(){
    function createContainer(toDo){
        const $cardDiv = document.createElement('div');
        $cardDiv.id = toDo.itemId;
        $cardDiv.classList.add('card');
        $cardDiv.classList.add('task');

        let circleColour = "";

        if(toDo.priority === 'high'){
            circleColour = '#ff6e6e';
        } else if(toDo.priority === 'medium'){
            circleColour = '#ffb46e';
        } else if(toDo.priority === 'low'){
            circleColour = '#fdff8d';
        }

        if(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDo.itemId).complete == true){
            $cardDiv.classList.add('complete');
        }

        $cardDiv.innerHTML += `
        <div class="titleContainer">
            <h2 id="title">${toDo.title}</h2>
            <div id="colourCircle" style='background-color:${circleColour};'>&nbsp;</div>
        </div>
        <p id="desc">${toDo.description}</p>
        <p id="date">${toDo.date}</p>`


        return $cardDiv
    }

    function createRemoveButton(toDo){
        const $removeButton = document.createElement('img')
        $removeButton.src = './images/trash-2.svg';
        $removeButton.id = 'trash';

        $removeButton.addEventListener('click', (e) => {
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.removeToDo(toDo)
        })

        return $removeButton
    }

    function createCheckBox(){
        const $checkBox = document.createElement('input');
        $checkBox.type = 'checkbox';

        $checkBox.addEventListener('change', (e) =>{
            const $toDo = $checkBox.parentNode.parentNode;
            const toDoId = $toDo.id

            if(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDoId).complete === false){
                _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDoId).complete = true;
                e.target.checked = true;
                $toDo.classList.toggle('complete');
                _storageController__WEBPACK_IMPORTED_MODULE_1__.storageController.saveAll()
            } else if(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDoId).complete === true) {
                _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDoId).complete = false;
                e.target.checked = false;
                $toDo.classList.toggle('complete');
                _storageController__WEBPACK_IMPORTED_MODULE_1__.storageController.saveAll()
            }

            _storageController__WEBPACK_IMPORTED_MODULE_1__.storageController.saveAll()
        })

        return $checkBox;
    }

    return{
        createContainer,
        createRemoveButton,
        createCheckBox
    }

})()



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");
/* harmony import */ var _ui_displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/displayController */ "./src/ui/displayController.js");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageController */ "./src/storageController.js");
/* harmony import */ var _sortController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortController */ "./src/sortController.js");
/* harmony import */ var _searchController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchController */ "./src/searchController.js");






const $contentTitle = document.querySelector('div#content h1');
const $dashboard = document.querySelector('li#dashboard')
const $projects = document.querySelector('li#projects')
const $toDos = document.querySelector('li#toDos')
const $createItem = document.querySelector('li#createTask')
const $today = document.querySelector('li#today')
const $thisWeek = document.querySelector('li#thisWeek')
const $searchInput = document.getElementById('searchbarInput')

$searchInput.addEventListener('change', (e)=>{
    console.log(e.target.value)
    _searchController__WEBPACK_IMPORTED_MODULE_4__.searchController.search(e.target.value)
})

$createItem.addEventListener('click', ()=>{
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.createItemPopup()
})

$dashboard.addEventListener('click', () => {
    $contentTitle.textContent = 'Dashboard'
    _sortController__WEBPACK_IMPORTED_MODULE_3__.sortController.defaultDash();
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()
})

$projects.addEventListener('click', () => {
    $contentTitle.textContent = 'Projects'
    _sortController__WEBPACK_IMPORTED_MODULE_3__.sortController.projects();
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()
})

$toDos.addEventListener('click', () => {
    $contentTitle.textContent = 'ToDos'
    _sortController__WEBPACK_IMPORTED_MODULE_3__.sortController.toDos();
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()
})

$today.addEventListener('click', () => {
    $contentTitle.textContent = 'Today'
    _sortController__WEBPACK_IMPORTED_MODULE_3__.sortController.itemsToday();
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()
})

$thisWeek.addEventListener('click', () => {
    $contentTitle.textContent = 'This Week'
    _sortController__WEBPACK_IMPORTED_MODULE_3__.sortController.itemsThisWeek();
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()
})



_storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.loadAll()
_sortController__WEBPACK_IMPORTED_MODULE_3__.sortController.defaultDash();

_ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FB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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZWFyY2hDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zb3J0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N1YlRhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2lucHV0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdWktaXRlbXMvY3JlYXRlSXRlbVVJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVQcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdWktaXRlbXMvY3JlYXRlU3ViVGFza1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVUb0RvQ2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcclxuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcclxuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcclxuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xyXG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcclxuXHJcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcclxuICAgIHJldHVybiBudW1iZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xyXG59IiwiLyoqXHJcbiAqIERheXMgaW4gMSB3ZWVrLlxyXG4gKlxyXG4gKiBAbmFtZSBkYXlzSW5XZWVrXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcclxuLyoqXHJcbiAqIERheXMgaW4gMSB5ZWFyXHJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XHJcbiAqXHJcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cclxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xyXG4gKlxyXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xyXG4vKipcclxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXHJcbiAqXHJcbiAqIEBuYW1lIG1heFRpbWVcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuLyoqXHJcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxyXG4gKlxyXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XHJcbi8qKlxyXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXHJcbiAqXHJcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XHJcbi8qKlxyXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcclxuICpcclxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XHJcbi8qKlxyXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cclxuICpcclxuICogQG5hbWUgbWluVGltZVxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcclxuLyoqXHJcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXHJcbiAqXHJcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XHJcbi8qKlxyXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXHJcbiAqXHJcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XHJcbi8qKlxyXG4gKiBNb250aHMgaW4gMSB5ZWFyXHJcbiAqXHJcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xyXG4vKipcclxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXHJcbiAqXHJcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xyXG4vKipcclxuICogU2Vjb25kcyBpbiAxIGhvdXJcclxuICpcclxuICogQG5hbWUgc2Vjb25kc0luSG91clxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xyXG4vKipcclxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxyXG4gKlxyXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcclxuLyoqXHJcbiAqIFNlY29uZHMgaW4gMSBkYXlcclxuICpcclxuICogQG5hbWUgc2Vjb25kc0luRGF5XHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xyXG4vKipcclxuICogU2Vjb25kcyBpbiAxIHdlZWtcclxuICpcclxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xyXG4vKipcclxuICogU2Vjb25kcyBpbiAxIHllYXJcclxuICpcclxuICogQG5hbWUgc2Vjb25kc0luWWVhclxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xyXG4vKipcclxuICogU2Vjb25kcyBpbiAxIG1vbnRoXHJcbiAqXHJcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XHJcbi8qKlxyXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxyXG4gKlxyXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgaXNTYW1lRGF5XHJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cclxuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXHJcbiAqIC8vPT4gZmFsc2VcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXHJcbiAqIC8vPT4gZmFsc2VcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcclxuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xyXG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcclxufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBpc1NhbWVXZWVrXHJcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcclxuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cclxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XHJcbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xyXG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcclxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xyXG4gKiAgIHdlZWtTdGFydHNPbjogMVxyXG4gKiB9KVxyXG4gKiAvLz0+IGZhbHNlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cclxuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXHJcbiAqIC8vPT4gZmFsc2VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xyXG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcclxufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgaXNUaGlzV2Vla1xyXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cclxuICogQHB1cmUgZmFsc2VcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cclxuICpcclxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcclxuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcclxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XHJcbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cclxuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcclxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xyXG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcclxuICogLy89PiBmYWxzZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xyXG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBpc1RvZGF5XHJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cclxuICogQHB1cmUgZmFsc2VcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xyXG4gKlxyXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xyXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cclxuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xyXG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIHBhcnNlSVNPXHJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXHJcbiAqXHJcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxyXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxyXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXHJcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXHJcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcclxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xyXG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XHJcblxyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcclxuXHJcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcclxuICB2YXIgZGF0ZTtcclxuXHJcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcclxuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XHJcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgfVxyXG5cclxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgdmFyIHRpbWUgPSAwO1xyXG4gIHZhciBvZmZzZXQ7XHJcblxyXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XHJcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xyXG5cclxuICAgIGlmIChpc05hTih0aW1lKSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xyXG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XHJcblxyXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxyXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxyXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXHJcbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcclxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XHJcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcclxuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XHJcbn1cclxudmFyIHBhdHRlcm5zID0ge1xyXG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXHJcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXHJcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xyXG59O1xyXG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XHJcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XHJcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xyXG5cclxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcclxuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcclxuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcclxuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cclxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxyXG5cclxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xyXG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xyXG4gIH1cclxuXHJcbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xyXG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XHJcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XHJcblxyXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcclxuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xyXG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0aW1lU3RyaW5nKSB7XHJcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XHJcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlU3RyaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcclxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcclxuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcclxuXHJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcclxuICAgIHllYXI6IE5hTixcclxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xyXG4gIH07XHJcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XHJcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcclxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XHJcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXHJcblxyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcclxuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XHJcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xyXG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcclxuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xyXG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XHJcblxyXG4gIGlmIChpc1dlZWtEYXRlKSB7XHJcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcclxuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XHJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcclxuXHJcbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XHJcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcclxuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xyXG5cclxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XHJcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xyXG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xyXG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcclxuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XHJcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XHJcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcclxuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcclxuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xyXG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xyXG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXHJcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxyXG5cclxuXHJcbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcclxuXHJcbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XHJcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XHJcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xyXG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xyXG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgaWYgKGhvdXJzID09PSAyNCkge1xyXG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xyXG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgc3RhcnRPZkRheVxyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcclxuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cclxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcclxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxyXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXHJcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcclxuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxyXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxyXG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxyXG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxyXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXHJcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XHJcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xyXG5cclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xyXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXHJcblxyXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcclxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XHJcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICByZXR1cm4gZGF0ZTtcclxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSB0b0RhdGVcclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxyXG4gKlxyXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxyXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXHJcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXHJcblxyXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xyXG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXHJcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcblxyXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gIH1cclxufSIsImltcG9ydCB7dG9Eb0NvbnRyb2xsZXJ9IGZyb20gJy4vdG9Eb0NvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7c3ViVGFza0NvbnRyb2xsZXJ9IGZyb20gJy4vc3ViVGFza0NvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi91aS9kaXNwbGF5Q29udHJvbGxlci5qcyc7XHJcbmltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi9zdG9yYWdlQ29udHJvbGxlci5qcyc7XHJcblxyXG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGxldCBjdXJyZW50SXRlbXMgPSBpdGVtcztcclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50SXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudEl0ZW1zKG5ld0FycmF5KXtcclxuICAgICAgICBjdXJyZW50SXRlbXMgPSBuZXdBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpe1xyXG4gICAgICAgIGxldCBuZXdUb0RvID0ge3R5cGU6ICd0b0RvJywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSwgY29tcGxldGU6IGZhbHNlfVxyXG5cclxuICAgICAgICBuZXdUb0RvLml0ZW1JZCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBpdGVtcy5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAgICAgICBuZXdUb0RvLnRvRG9JZCA9IHRvRG9Db250cm9sbGVyLmdldExlbmd0aCgpXHJcblxyXG4gICAgICAgIHRvRG9Db250cm9sbGVyLmNyZWF0ZShuZXdUb0RvKVxyXG4gICAgICAgIHJldHVybiBuZXdUb0RvXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSB7dHlwZTogJ3Byb2plY3QnLCB0aXRsZSwgc3ViVGFza3M6IFtdLCBjb21wbGV0ZTogZmFsc2UsIGNvbXBsZXRlVGFza3M6IDAsIHBlcmNlbnRhZ2U6IDB9XHJcblxyXG4gICAgICAgIG5ld1Byb2plY3QuaXRlbUlkID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgIG5ld1Byb2plY3QucHJvamVjdElkID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmNyZWF0ZShuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3RcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpe1xyXG4gICAgICAgIGNvbnN0IHBhcmVudElkID0gcHJvamVjdC5pdGVtSWQ7XHJcbiAgICAgICAgbGV0IG5ld1N1YlRhc2sgPSB7dHlwZTogJ3N1YlRhc2snLCBwYXJlbnRJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSwgY29tcGxldGU6IGZhbHNlfTtcclxuICAgICAgICBuZXdTdWJUYXNrLml0ZW1JZCA9IGl0ZW1zLmxlbmd0aFxyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3U3ViVGFzayk7XHJcblxyXG4gICAgICAgIG5ld1N1YlRhc2suc3ViVGFza0lkID0gc3ViVGFza0NvbnRyb2xsZXIuZ2V0TGVuZ3RoKClcclxuXHJcbiAgICAgICAgc3ViVGFza0NvbnRyb2xsZXIuY3JlYXRlKG5ld1N1YlRhc2spO1xyXG4gICAgICAgIHJldHVybiBuZXdTdWJUYXNrXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEl0ZW0oaWQpe1xyXG4gICAgICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoaSA9PiBpLml0ZW1JZCA9PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kSXRlbVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ0l0ZW1zKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3ViVGFzayhzdWJUYXNrKXtcclxuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZihpdGVtcy5maW5kKCBpID0+IGkuaXRlbUlkID09PXN1YlRhc2suaXRlbUlkKSksIDEpXHJcbiAgICAgICAgc3ViVGFza0NvbnRyb2xsZXIucmVtb3ZlKHN1YlRhc2spXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KXtcclxuICAgICAgICBpZihwcm9qZWN0LnN1YlRhc2tzKXtcclxuICAgICAgICAgICAgcHJvamVjdC5zdWJUYXNrcy5mb3JFYWNoKHRhc2sgPT57XHJcbiAgICAgICAgICAgICAgICByZW1vdmVTdWJUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5pbmRleE9mKGl0ZW1zLmZpbmQoIGkgPT4gaS5pdGVtSWQgPT09cHJvamVjdC5pdGVtSWQpKSwgMSlcclxuXHJcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIucmVtb3ZlKHByb2plY3QpXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9Ebyh0b0RvKXtcclxuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZihpdGVtcy5maW5kKCBpID0+IGkuaXRlbUlkID09PXRvRG8uaXRlbUlkKSksIDEpXHJcbiAgICAgICAgdG9Eb0NvbnRyb2xsZXIucmVtb3ZlKHRvRG8pXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SXRlbXMoKXtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEl0ZW1zKG5ld0l0ZW1zKXtcclxuICAgICAgICBpdGVtcyA9IG5ld0l0ZW1zXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGZpbmRJdGVtLFxyXG4gICAgICAgIGxvZ0l0ZW1zLFxyXG4gICAgICAgIGNyZWF0ZVRvRG8sXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcclxuICAgICAgICBjcmVhdGVTdWJUYXNrLFxyXG4gICAgICAgIHJlbW92ZVN1YlRhc2ssXHJcbiAgICAgICAgZ2V0SXRlbXMsXHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcclxuICAgICAgICByZW1vdmVUb0RvLFxyXG4gICAgICAgIGxvYWRJdGVtcyxcclxuICAgICAgICBzZXRDdXJyZW50SXRlbXMsXHJcbiAgICAgICAgZ2V0Q3VycmVudEl0ZW1zLFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHByb2plY3RzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCl7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocHJvamVjdCl7XHJcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShwcm9qZWN0KXtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHByb2plY3QpKSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvamVjdHMobmV3SXRlbXMpe1xyXG4gICAgICAgIHByb2plY3RzID0gbmV3SXRlbXNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZ2V0TGVuZ3RoLFxyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgICAgICByZW1vdmUsXHJcbiAgICAgICAgZ2V0UHJvamVjdHMsXHJcbiAgICAgICAgbG9hZFByb2plY3RzXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge3Byb2plY3RDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiXHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vdWkvZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHNlYXJjaENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHNlYXJjaCh0ZXh0KXtcclxuICAgICAgICBpZih0ZXh0PT1mYWxzZSl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGNyZWF0ZUNvbnRyb2xsZXIuZ2V0Q3VycmVudEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1GaWx0ZXJlZFRpdGxlID0gaXRlbXMuZmlsdGVyKCBpPT4gaS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSkgKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUZpbHRlcmVkRGVzY1R5cGUgPSBpdGVtcy5maWx0ZXIoIGk9PiAoaS50eXBlID09PSAnc3ViVGFzaycpIHx8IChpLnR5cGUgPT09ICd0b0RvJykpXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1GaWx0ZXJlZERlc2MgPSBpdGVtRmlsdGVyZWREZXNjVHlwZS5maWx0ZXIoIGk9PiBpLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtRmlsdGVyZWREZXNjLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtRmlsdGVyZWRUaXRsZS5pbmNsdWRlcyhpdGVtKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUZpbHRlcmVkRGVzYy5zcGxpY2UoaXRlbUZpbHRlcmVkRGVzYy5pbmRleE9mKGl0ZW0pLDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbUZpbHRlcmVkVGl0bGUuY29uY2F0KGl0ZW1GaWx0ZXJlZERlc2MpXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEl0ZW1zKVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5zZXRDdXJyZW50SXRlbXMoZmlsdGVyZWRJdGVtcyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2godHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHNlYXJjaENvbnRyb2xsZXIgfSIsImltcG9ydCB7IGlzVGhpc1dlZWssIGlzVG9kYXksIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NyZWF0ZUNvbnRyb2xsZXInXHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi91aS9kaXNwbGF5Q29udHJvbGxlcic7XHJcblxyXG5jb25zdCBzb3J0Q29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gaXRlbXNUb2RheSgpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zVG9kYXkgPSBbXTtcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUb2RheShwYXJzZUlTTyhpdGVtLmRhdGUpKSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RvZGF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdzdWJUYXNrJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oaXRlbS5wYXJlbnRJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9kYXkucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuc2V0Q3VycmVudEl0ZW1zKGl0ZW1zVG9kYXkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXRlbXNUaGlzV2Vlaygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zVGhpc1dlZWsgPSBbXTtcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUaGlzV2VlayhwYXJzZUlTTyhpdGVtLmRhdGUpKSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RoaXNXZWVrLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09PSAnc3ViVGFzaycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKGl0ZW0ucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1RoaXNXZWVrLnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLnNldEN1cnJlbnRJdGVtcyhpdGVtc1RoaXNXZWVrKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RGFzaCgpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuc2V0Q3VycmVudEl0ZW1zKGl0ZW1zKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvamVjdHMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGNyZWF0ZUNvbnRyb2xsZXIuZ2V0SXRlbXMoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ3N1YlRhc2snKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShpdGVtLnBhcmVudElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuc2V0Q3VycmVudEl0ZW1zKHByb2plY3RzKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b0Rvcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNvbnN0IHRvRG9zID0gW107XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ3RvRG8nKXtcclxuICAgICAgICAgICAgICAgIHRvRG9zLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09PSAnc3ViVGFzaycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKGl0ZW0ucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b0Rvcy5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5zZXRDdXJyZW50SXRlbXModG9Eb3MpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4geyBpdGVtc1RvZGF5LFxyXG4gICAgICAgICAgICBkZWZhdWx0RGFzaCxcclxuICAgICAgICAgICAgaXRlbXNUaGlzV2VlayxcclxuICAgICAgICAgICAgcHJvamVjdHMsXHJcbiAgICAgICAgICAgIHRvRG9zfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgc29ydENvbnRyb2xsZXIgfSIsImltcG9ydCB7Y3JlYXRlQ29udHJvbGxlcn0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiXHJcbmltcG9ydCB7IHByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgdG9Eb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90b0RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdWJUYXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3N1YlRhc2tDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHNhdmVBbGwoKXtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBzYXZlSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQWxsKCl7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnaXRlbXMnKSkge1xyXG4gICAgICAgICAgICBsb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgbG9hZFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIGxvYWRTdWJUYXNrcygpO1xyXG4gICAgICAgICAgICBsb2FkVG9Eb3MoKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZVByb2oxID0gY3JlYXRlQ29udHJvbGxlci5jcmVhdGVQcm9qZWN0KCdLaXRjaGVuIENsZWFudXAnKTtcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHNhbXBsZVByb2oxLCAnQ2xlYW4gZGlzaGVzJywgJ0luIHRoZSBzaW5rIGZyb20gbGFzdCBuaWdodCcsICdoaWdoJywgJzIwMjItMDgtMjgnKVxyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2soc2FtcGxlUHJvajEsICdNb3AgdGhlIGZsb29yJywgJ01vcCBpcyBpbiB0aGUgdXRpbGl0eSByb29tJywgJ21lZGl1bScsICcyMDIyLTA4LTMwJylcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9EbygnRmVlZCB0aGUgZG9nJywgJ0RyeSBmb29kIGluIHRoZSBwYW50cnknLCAnbG93JywgJzIwMjItMDktMDMnKVxyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVRvRG8oJ0NsZWFuIHRoZSBiYXRocm9vbScsICdTdXBwbGllcyBpbiBjdXBib2FyZCcsICdoaWdoJywgJzIwMjItMDktMDInKVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlUHJvajIgPSBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoJ1NjaG9vbCBQcm9qZWN0cycpO1xyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2soc2FtcGxlUHJvajIsICdHZW9ncmFwaHkgUmVzZWFyY2ggU3R1ZHknLCAnT24gdm9sY2Fub2VzIGFuZCBlY29ub21pYyBpbXBhY3RzJywgJ2hpZ2gnLCAnMjAyMi0wOC0yOCcpXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhzYW1wbGVQcm9qMiwgJ1NjaWVuY2UgTGFiIFJlcG9ydCcsICdFZmZlY3RzIG9mIHNhbHQgaW4gZHJpbmtpbmcgd2F0ZXInLCAnbG93JywgJzIwMjItMDgtMzAnKVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVUb0RvKCdGaW5pc2ggVG8tZG8gYXBwJywgJ0FsbW9zdCBkb25lJywgJ21lZGl1bScsICcyMDIyLTA5LTExJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZUl0ZW1zKCl7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBjcmVhdGVDb250cm9sbGVyLmdldEl0ZW1zKClcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1zJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRJdGVtcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpO1xyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIubG9hZEl0ZW1zKGl0ZW1zKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gaXRlbXMuZmlsdGVyKGkgPT4gaS50eXBlID09PSAncHJvamVjdCcpO1xyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmxvYWRQcm9qZWN0cyhwcm9qZWN0cylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkVG9Eb3MoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpdGVtcycpKTtcclxuICAgICAgICBjb25zdCB0b0RvcyA9IGl0ZW1zLmZpbHRlcihpID0+IGkudHlwZSA9PT0gJ3RvRG8nKTtcclxuICAgICAgICB0b0RvQ29udHJvbGxlci5sb2FkVG9Eb3ModG9Eb3MpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFN1YlRhc2tzKCl7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbXMnKSk7XHJcbiAgICAgICAgY29uc3Qgc3ViVGFza3MgPSBpdGVtcy5maWx0ZXIoaSA9PiBpLnR5cGUgPT09ICdzdWJUYXNrJyk7XHJcbiAgICAgICAgc3ViVGFza0NvbnRyb2xsZXIubG9hZFN1YlRhc2tzKHN1YlRhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBzYXZlQWxsLFxyXG4gICAgICAgIGxvYWRBbGxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi91aS9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qgc3ViVGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgc3ViVGFza3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gc3ViVGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShzdWJUYXNrKXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VG9BZGRUbyA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnRJZCk7XHJcbiAgICAgICAgc3ViVGFza3MucHVzaChzdWJUYXNrKTtcclxuXHJcbiAgICAgICAgcHJvamVjdFRvQWRkVG8uc3ViVGFza3MucHVzaChzdWJUYXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShzdWJUYXNrKXtcclxuICAgICAgICBzdWJUYXNrcy5zcGxpY2Uoc3ViVGFza3MuaW5kZXhPZihzdWJUYXNrcy5maW5kKGkgPT4gaS5pdGVtSWQgPT09IHN1YlRhc2suaXRlbUlkKSksIDEpXHJcbiAgICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnRJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50UHJvamVjdClcclxuICAgICAgICBpZihzdWJUYXNrLmNvbXBsZXRlID09IHRydWUpe1xyXG4gICAgICAgICAgICBwYXJlbnRQcm9qZWN0LmNvbXBsZXRlVGFza3MgPSBwYXJlbnRQcm9qZWN0LmNvbXBsZXRlVGFza3MtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5kZXhPZlRhc2sgPSBwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmluZGV4T2YocGFyZW50UHJvamVjdC5zdWJUYXNrcy5maW5kKGkgPT4gaS5pZCA9PT0gc3ViVGFzay5pZCkpO1xyXG5cclxuICAgICAgICBwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLnNwbGljZShwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmluZGV4T2YocGFyZW50UHJvamVjdC5zdWJUYXNrcy5maW5kKGkgPT4gaS5pdGVtSWQgPT09IHN1YlRhc2suaXRlbUlkKSksMSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1YlRhc2tzKCl7XHJcbiAgICAgICAgcmV0dXJuIHN1YlRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRTdWJUYXNrcyhuZXdJdGVtcyl7XHJcbiAgICAgICAgc3ViVGFza3MgPSBuZXdJdGVtc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZ2V0TGVuZ3RoLFxyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgICAgICByZW1vdmUsXHJcbiAgICAgICAgZ2V0U3ViVGFza3MsXHJcbiAgICAgICAgbG9hZFN1YlRhc2tzLFxyXG4gICAgICAgIHN1YlRhc2tzXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge3N1YlRhc2tDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgdG9Eb0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdG9Eb3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvRG9zLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0b0RvKXtcclxuICAgICAgICB0b0Rvcy5wdXNoKHRvRG8pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHRvRG8pe1xyXG4gICAgICAgIHRvRG9zLnNwbGljZSh0b0Rvcy5pbmRleE9mKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0odG9EbykpLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRvRG9zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRvRG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRUb0RvcyhuZXdJdGVtcyl7XHJcbiAgICAgICAgdG9Eb3MgPSBuZXdJdGVtc1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJdGVtKGl0ZW1JZHMpe1xyXG4gICAgICAgIHJldHVybiB0b0Rvcy5maW5kKCBpID0+IGkuaXRlbUlkID09PSBpdGVtSWRzKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlLFxyXG4gICAgICAgIGdldExlbmd0aCxcclxuICAgICAgICByZW1vdmUsXHJcbiAgICAgICAgZ2V0VG9Eb3MsXHJcbiAgICAgICAgbG9hZFRvRG9zLFxyXG4gICAgICAgIGZpbmRJdGVtXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge3RvRG9Db250cm9sbGVyfTsiLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSAnLi4vY3JlYXRlQ29udHJvbGxlcic7XHJcbiBcclxuaW1wb3J0IHsgY3JlYXRlSXRlbVVJIH0gZnJvbSAnLi91aS1pdGVtcy9jcmVhdGVJdGVtVUknXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSAnLi91aS1pdGVtcy9jcmVhdGVQcm9qZWN0Q2FyZCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN1YlRhc2tVSSB9IGZyb20gJy4vdWktaXRlbXMvY3JlYXRlU3ViVGFza1VJJztcclxuaW1wb3J0IHsgY3JlYXRlVG9Eb0NhcmQgfSBmcm9tICcuL3VpLWl0ZW1zL2NyZWF0ZVRvRG9DYXJkJztcclxuaW1wb3J0IHsgc3RvcmFnZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9zdG9yYWdlQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHNvcnRDb250cm9sbGVyIH0gZnJvbSAnLi4vc29ydENvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0ICRjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcclxuICAgIGNvbnN0ICRjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NhcmRDb250YWluZXInKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtUG9wdXAoKXtcclxuICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUYXNrUG9wdXAnKTtcclxuXHJcbiAgICAgICAgbGV0ICRoZWFkZXIgPSBjcmVhdGVJdGVtVUkuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgbGV0ICRmb3JtQm9keSA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVGb3JtQm9keSgpO1xyXG4gICAgICAgIGxldCAkY3JlYXRlID0gY3JlYXRlSXRlbVVJLmNyZWF0ZUNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIGxldCAkZXhpdCA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVFeGl0QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGhlYWRlcilcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRmb3JtQm9keSlcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjcmVhdGUpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZXhpdClcclxuXHJcbiAgICAgICAgJGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpe1xyXG4gICAgICAgIGNvbnN0ICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCl7XHJcbiAgICAgICAgcHJvamVjdC5jb21wbGV0ZVRhc2tzID0gMFxyXG4gICAgICAgIHByb2plY3Quc3ViVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgaWYodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNvbXBsZXRlVGFza3MrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZUNvbnRhaW5lcihwcm9qZWN0KTtcclxuICAgICAgICAkY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCAkc3ViVGFza3MgPSBjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVTdWJUYXNrcyhwcm9qZWN0KTtcclxuICAgICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRzdWJUYXNrcyk7XHJcbiAgICAgICAgY29uc3QgJGJvdHRvbUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUluZm8nKVxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVBZGRCdXR0b24ocHJvamVjdCkpXHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZVBlcmNlbnRhZ2UocHJvamVjdCkpXHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZVJlbW92ZUJ1dHRvbihwcm9qZWN0KSlcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkYm90dG9tQ29udHJvbHMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0b0RvKXtcclxuICAgICAgICBjb25zdCAkY29udGFpbmVyID0gY3JlYXRlVG9Eb0NhcmQuY3JlYXRlQ29udGFpbmVyKHRvRG8pO1xyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCAkYm90dG9tQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgnYm90dG9tQ29udHJvbHMnKTtcclxuICAgICAgICBjb25zdCAkcmVtb3ZlQnV0dG9uID0gY3JlYXRlVG9Eb0NhcmQuY3JlYXRlUmVtb3ZlQnV0dG9uKHRvRG8pO1xyXG4gICAgICAgIGNvbnN0ICRjaGVja0JveCA9IGNyZWF0ZVRvRG9DYXJkLmNyZWF0ZUNoZWNrQm94KHRvRG8pO1xyXG5cclxuICAgICAgICBpZihjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRvRG8uaXRlbUlkKS5jb21wbGV0ZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICRjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICRjaGVja0JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlQWxsKClcclxuXHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKCRjaGVja0JveCk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKCRyZW1vdmVCdXR0b24pO1xyXG5cclxuICAgICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRib3R0b21Db250cm9scylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJEYXNoKGZpbHRlcmVkID0gZmFsc2Upe1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCBoMScpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBpZigkY29udGVudFRpdGxlLnRleHRDb250ZW50ID09PSAnRGFzaGJvYXJkJyl7XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29udHJvbGxlci5kZWZhdWx0RGFzaCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9PT0gJ1RvZGF5Jyl7XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29udHJvbGxlci5pdGVtc1RvZGF5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZigkY29udGVudFRpdGxlLnRleHRDb250ZW50ID09PSAnVGhpcyBXZWVrJyl7XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29udHJvbGxlci5pdGVtc1RoaXNXZWVrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZigkY29udGVudFRpdGxlLnRleHRDb250ZW50ID09PSAnUHJvamVjdHMnKXtcclxuICAgICAgICAgICAgICAgIHNvcnRDb250cm9sbGVyLnByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZigkY29udGVudFRpdGxlLnRleHRDb250ZW50ID09PSAnVG9Eb3MnKXtcclxuICAgICAgICAgICAgICAgIHNvcnRDb250cm9sbGVyLnRvRG9zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1BcnJheSA9IGNyZWF0ZUNvbnRyb2xsZXIuZ2V0Q3VycmVudEl0ZW1zKClcclxuICAgICAgICBjbGVhbkRhc2goKVxyXG5cclxuICAgICAgICBpdGVtQXJyYXkuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgICBpZihpdGVtLnR5cGUgPT0gJ3Byb2plY3QnKXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT0gJ3RvRG8nKXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvRG8oaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYW5EYXNoKCl7XHJcbiAgICAgICAgJGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ViVGFza1BvcHVwKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRhc2tQb3B1cCcpO1xyXG5cclxuICAgICAgICBsZXQgJGhlYWRlciA9IGNyZWF0ZVN1YlRhc2tVSS5jcmVhdGVIZWFkZXIoKTtcclxuICAgICAgICBsZXQgJGZvcm1Cb2R5ID0gY3JlYXRlU3ViVGFza1VJLmNyZWF0ZUZvcm1Cb2R5KCk7XHJcbiAgICAgICAgbGV0ICRjcmVhdGUgPSBjcmVhdGVTdWJUYXNrVUkuY3JlYXRlQ3JlYXRlQnV0dG9uKHByb2plY3QpO1xyXG4gICAgICAgIGxldCAkZXhpdCA9IGNyZWF0ZVN1YlRhc2tVSS5jcmVhdGVFeGl0QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGhlYWRlcik7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZm9ybUJvZHkpO1xyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGNyZWF0ZSk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZXhpdCk7XHJcblxyXG4gICAgICAgICRjb250ZW50RGl2LmFwcGVuZENoaWxkKCRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlSXRlbVBvcHVwLFxyXG4gICAgICAgIGNsb3NlQ3JlYXRlSXRlbVBvcHVwLFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXHJcbiAgICAgICAgcmVuZGVyRGFzaCxcclxuICAgICAgICBjcmVhdGVTdWJUYXNrUG9wdXBcclxuICAgIH1cclxufSkoKVxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udHJvbGxlcn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHNvcnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL3NvcnRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGlucHV0Q29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gcGFyc2VDcmVhdGVJdGVtKCl7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0eXBlXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkYXRlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlID09PSAncHJvamVjdCcpe1xyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVByb2plY3QodGl0bGUpXHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICd0b0RvJyl7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKCk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIubG9nSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUNyZWF0ZVN1YlRhc2socHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGF0ZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHByb2plY3QsIHRpdGxlLGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSlcclxuXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpO1xyXG5cclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLmxvZ0l0ZW1zKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcGFyc2VDcmVhdGVJdGVtLFxyXG4gICAgICAgIHBhcnNlQ3JlYXRlU3ViVGFza1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgaW5wdXRDb250cm9sbGVyIH0iLCJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBpbnB1dENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vaW5wdXRDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVJdGVtVUkgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gICAgICAgIGNvbnN0ICRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgJGgyLnRleHRDb250ZW50PSdDcmVhdGUgYW4gSXRlbSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICRoMlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtQm9keSgpe1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICAgICAgICAkZm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlR5cGU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cInRvRG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwicHJvamVjdFwiPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxSYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvRG9cIj5Ub0RvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCI+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsUmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcblxyXG4gICAgICAgIHJldHVybiAkZm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNyZWF0ZUJ1dHRvbigpe1xyXG4gICAgICAgIGxldCAkY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi5pZCA9ICdidXR0b24nXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgSXRlbSc7XHJcblxyXG4gICAgICAgICRjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dENvbnRyb2xsZXIucGFyc2VDcmVhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjcmVhdGVCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFeGl0QnV0dG9uKCl7XHJcbiAgICAgICAgbGV0ICRjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5pZCA9ICdyZW1CdXR0b24nXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0V4aXQnO1xyXG5cclxuICAgICAgICAkY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY2xvc2VCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlRm9ybUJvZHksXHJcbiAgICAgICAgY3JlYXRlSGVhZGVyLFxyXG4gICAgICAgIGNyZWF0ZUNyZWF0ZUJ1dHRvbixcclxuICAgICAgICBjcmVhdGVFeGl0QnV0dG9uXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2NyZWF0ZUl0ZW1VSX0iLCJpbXBvcnQgeyBzdWIgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL3N0b3JhZ2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHN1YlRhc2tDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL3N1YlRhc2tDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4uL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0Q2FyZCA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRwcm9qZWN0Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmlkID0gcHJvamVjdC5pdGVtSWRcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGgyPiR7cHJvamVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RUYXNrQ29udGFpbmVyXCIgaWQ9JyR7cHJvamVjdC5pdGVtSWR9Jz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgcmV0dXJuICRwcm9qZWN0Q2FyZENvbnRhaW5lclxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN1YlRhc2tzKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdi5wcm9qZWN0VGFza0NvbnRhaW5lcltpZD0nJHtwcm9qZWN0Lml0ZW1JZH0nXWApO1xyXG5cclxuICAgICAgICBwcm9qZWN0LnN1YlRhc2tzLmZvckVhY2goc3ViVGFzayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9qZWN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2suY2xhc3NMaXN0LmFkZCgncHJvamVjdFRhc2snKTtcclxuICAgICAgICAgICAgJHByb2plY3RUYXNrLmlkID0gc3ViVGFzay5pdGVtSWQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2lyY2xlQ29sb3VyID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmKHN1YlRhc2sucHJpb3JpdHkgPT09ICdoaWdoJyl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmNmU2ZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihzdWJUYXNrLnByaW9yaXR5ID09PSAnbWVkaXVtJyl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmYjQ2ZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihzdWJUYXNrLnByaW9yaXR5ID09PSAnbG93Jyl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZkZmY4ZCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRwcm9qZWN0VGFzay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xvdXJDaXJjbGVcIiBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjoke2NpcmNsZUNvbG91cn07Jz4mbmJzcDs8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wVGFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj4ke3N1YlRhc2sudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7c3ViVGFzay5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVRhc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3N1YlRhc2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3RyYXNoLTIuc3ZnXCIgY2xhc3M9XCJ0cmFzaFwiIGlkPScke3N1YlRhc2suaXRlbUlkfSc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9JyR7c3ViVGFzay5pdGVtSWR9Jz5cclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgJHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKCRwcm9qZWN0VGFzaylcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrQm94ID0gJHByb2plY3RUYXNrLnF1ZXJ5U2VsZWN0b3IoYGlucHV0YCk7XHJcblxyXG4gICAgICAgICAgICBpZihjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2suaXRlbUlkKS5jb21wbGV0ZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAkY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkcHJvamVjdFRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHRyYXNoQnV0dG9uID0gJHByb2plY3RUYXNrLnF1ZXJ5U2VsZWN0b3IoYGltZ2ApO1xyXG5cclxuICAgICAgICAgICAgJHRyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrSWQgPSBlLnRhcmdldC5pZFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZycpXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RvUmVtID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0YXNrSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb1JlbSlcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIucmVtb3ZlU3ViVGFzayh0YXNrVG9SZW0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YlRhc2tJZCA9IGUudGFyZ2V0LmlkXHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViVGFzayA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFza0lkKVxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RQYXJlbnQgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2sucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKChjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2tJZCkpLmNvbXBsZXRlID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2tJZCkuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5jb21wbGV0ZVRhc2tzLS1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJlbnQucGVyY2VudGFnZSA9IChwcm9qZWN0UGFyZW50LmNvbXBsZXRlVGFza3MgLyBwcm9qZWN0UGFyZW50LnN1YlRhc2tzLmxlbmd0aCkgKjEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGVyY2VudGFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2gzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKHByb2plY3RQYXJlbnQucGVyY2VudGFnZSkgKyAnJSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFza0lkKSkuY29tcGxldGUgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2tJZCkuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJlbnQuY29tcGxldGVUYXNrcysrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJlbnQucGVyY2VudGFnZSA9IChwcm9qZWN0UGFyZW50LmNvbXBsZXRlVGFza3MgLyBwcm9qZWN0UGFyZW50LnN1YlRhc2tzLmxlbmd0aCkgKjEwMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGVyY2VudGFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2gzJylcclxuICAgICAgICAgICAgICAgICAgICAkcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IE1hdGguZmxvb3IocHJvamVjdFBhcmVudC5wZXJjZW50YWdlKSArICclJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nJylcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJUYXNrKVxyXG5cclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnNhdmVBbGwoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICRwcm9qZWN0VGFza0NvbnRhaW5lclxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBlcmNlbnRhZ2UocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHByb2plY3Quc3ViVGFza3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgcHJvamVjdC5wZXJjZW50YWdlID0gTWF0aC5mbG9vcigocHJvamVjdC5jb21wbGV0ZVRhc2tzIC8gcHJvamVjdC5zdWJUYXNrcy5sZW5ndGgpICoxMDApXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBwcm9qZWN0LnBlcmNlbnRhZ2UgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IHByb2plY3QucGVyY2VudGFnZSArICclJ1xyXG5cclxuICAgICAgICByZXR1cm4gJHBlcmNlbnRhZ2VcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24ocHJvamVjdCl7XHJcbiAgICAgICAgbGV0ICRidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAkYnV0LnNyYz0nLi9pbWFnZXMvcGx1cy1jaXJjbGUuc3ZnJztcclxuICAgICAgICAkYnV0LmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tCdXR0b24nKVxyXG5cclxuICAgICAgICAkYnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZGNsaWNrJylcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2tQb3B1cChwcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkYnV0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKHByb2plY3Qpe1xyXG4gICAgICAgIGxldCAkcmJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICRyYnV0LnNyYz0nLi9pbWFnZXMvdHJhc2gtMi5zdmcnO1xyXG4gICAgICAgICRyYnV0LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3RCdXR0b24nKVxyXG5cclxuICAgICAgICAkcmJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkcmJ1dFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVDb250YWluZXIsXHJcbiAgICAgICAgY3JlYXRlU3ViVGFza3MsXHJcbiAgICAgICAgY3JlYXRlUGVyY2VudGFnZSxcclxuICAgICAgICBjcmVhdGVBZGRCdXR0b24sXHJcbiAgICAgICAgY3JlYXRlUmVtb3ZlQnV0dG9uXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgaW5wdXRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2lucHV0Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlU3ViVGFza1VJID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcclxuICAgICAgICBjb25zdCAkaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICRoMi50ZXh0Q29udGVudD0nQ3JlYXRlIGEgc3VidGFzayc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICRoMlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtQm9keSgpe1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICAgICAgICAkZm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TG93PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG5cclxuICAgICAgICByZXR1cm4gJGZvcm1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDcmVhdGVCdXR0b24ocHJvamVjdCl7XHJcbiAgICAgICAgbGV0ICRjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLmlkID0gJ2J1dHRvbidcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBzdWJ0YXNrJztcclxuXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0Q29udHJvbGxlci5wYXJzZUNyZWF0ZVN1YlRhc2socHJvamVjdCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjcmVhdGVCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFeGl0QnV0dG9uKCl7XHJcbiAgICAgICAgbGV0ICRjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5pZCA9ICdyZW1CdXR0b24nXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0V4aXQnO1xyXG5cclxuICAgICAgICAkY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY2xvc2VCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlRm9ybUJvZHksXHJcbiAgICAgICAgY3JlYXRlSGVhZGVyLFxyXG4gICAgICAgIGNyZWF0ZUNyZWF0ZUJ1dHRvbixcclxuICAgICAgICBjcmVhdGVFeGl0QnV0dG9uXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2NyZWF0ZVN1YlRhc2tVSX0iLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc3RvcmFnZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vc3RvcmFnZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc3ViVGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vc3ViVGFza0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgdG9Eb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vdG9Eb0NvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVRvRG9DYXJkID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIodG9Ebyl7XHJcbiAgICAgICAgY29uc3QgJGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkY2FyZERpdi5pZCA9IHRvRG8uaXRlbUlkO1xyXG4gICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG4gICAgICAgIGxldCBjaXJjbGVDb2xvdXIgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZih0b0RvLnByaW9yaXR5ID09PSAnaGlnaCcpe1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmNmU2ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRvRG8ucHJpb3JpdHkgPT09ICdtZWRpdW0nKXtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3VyID0gJyNmZmI0NmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0b0RvLnByaW9yaXR5ID09PSAnbG93Jyl7XHJcbiAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmRmZjhkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0odG9Eby5pdGVtSWQpLmNvbXBsZXRlID09IHRydWUpe1xyXG4gICAgICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNhcmREaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyIGlkPVwidGl0bGVcIj4ke3RvRG8udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbG91ckNpcmNsZVwiIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7Y2lyY2xlQ29sb3VyfTsnPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGlkPVwiZGVzY1wiPiR7dG9Eby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHAgaWQ9XCJkYXRlXCI+JHt0b0RvLmRhdGV9PC9wPmBcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAkY2FyZERpdlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbih0b0RvKXtcclxuICAgICAgICBjb25zdCAkcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAkcmVtb3ZlQnV0dG9uLnNyYyA9ICcuL2ltYWdlcy90cmFzaC0yLnN2Zyc7XHJcbiAgICAgICAgJHJlbW92ZUJ1dHRvbi5pZCA9ICd0cmFzaCc7XHJcblxyXG4gICAgICAgICRyZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLnJlbW92ZVRvRG8odG9EbylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJHJlbW92ZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KCl7XHJcbiAgICAgICAgY29uc3QgJGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAkY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgICRjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b0RvID0gJGNoZWNrQm94LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgdG9Eb0lkID0gJHRvRG8uaWRcclxuXHJcbiAgICAgICAgICAgIGlmKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0odG9Eb0lkKS5jb21wbGV0ZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0b0RvSWQpLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgJHRvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnNhdmVBbGwoKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0b0RvSWQpLmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRvRG9JZCkuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICR0b0RvLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlQWxsKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUFsbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjaGVja0JveDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyLFxyXG4gICAgICAgIGNyZWF0ZVJlbW92ZUJ1dHRvbixcclxuICAgICAgICBjcmVhdGVDaGVja0JveFxyXG4gICAgfVxyXG5cclxufSkoKVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVG9Eb0NhcmQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi91aS9kaXNwbGF5Q29udHJvbGxlclwiXHJcbmltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSBcIi4vc3RvcmFnZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc29ydENvbnRyb2xsZXIgfSBmcm9tIFwiLi9zb3J0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzZWFyY2hDb250cm9sbGVyIH0gZnJvbSBcIi4vc2VhcmNoQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgJGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50IGgxJyk7XHJcbmNvbnN0ICRkYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaSNkYXNoYm9hcmQnKVxyXG5jb25zdCAkcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaSNwcm9qZWN0cycpXHJcbmNvbnN0ICR0b0RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpI3RvRG9zJylcclxuY29uc3QgJGNyZWF0ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaSNjcmVhdGVUYXNrJylcclxuY29uc3QgJHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkjdG9kYXknKVxyXG5jb25zdCAkdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaSN0aGlzV2VlaycpXHJcbmNvbnN0ICRzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hiYXJJbnB1dCcpXHJcblxyXG4kc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgIHNlYXJjaENvbnRyb2xsZXIuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxyXG59KVxyXG5cclxuJGNyZWF0ZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlSXRlbVBvcHVwKClcclxufSlcclxuXHJcbiRkYXNoYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ0Rhc2hib2FyZCdcclxuICAgIHNvcnRDb250cm9sbGVyLmRlZmF1bHREYXNoKCk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxufSlcclxuXHJcbiRwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICRjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnXHJcbiAgICBzb3J0Q29udHJvbGxlci5wcm9qZWN0cygpO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbn0pXHJcblxyXG4kdG9Eb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ1RvRG9zJ1xyXG4gICAgc29ydENvbnRyb2xsZXIudG9Eb3MoKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG59KVxyXG5cclxuJHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSdcclxuICAgIHNvcnRDb250cm9sbGVyLml0ZW1zVG9kYXkoKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG59KVxyXG5cclxuJHRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnXHJcbiAgICBzb3J0Q29udHJvbGxlci5pdGVtc1RoaXNXZWVrKCk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxufSlcclxuXHJcblxyXG5cclxuc3RvcmFnZUNvbnRyb2xsZXIubG9hZEFsbCgpXHJcbnNvcnRDb250cm9sbGVyLmRlZmF1bHREYXNoKCk7XHJcblxyXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=