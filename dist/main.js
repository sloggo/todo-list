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
    let filtered = false;
    

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
        }
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getCurrentItems();
        const itemFiltered = items.filter( i=> i.title.toLowerCase().includes(text.toLowerCase()) );

        console.log(itemFiltered)

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.setCurrentItems(itemFiltered);
        _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash(true)
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
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj1, 'Clean the dishes', 'In the sink from last night', 'high', '28-08-2022')
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj1, 'Mop the floor', 'Mop is in the utility room', 'medium', '30-08-2022')

            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Feed the dog', 'Dry food in the pantry', 'low', '01-09-2022')
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Collect the kids', 'School finishes at 14:00', 'high', '02-09-2022')

            const sampleProj2 = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createProject('School Projects');
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj2, 'Geography Research Study', 'On volcanoes and economic impacts', 'high', '28-08-2022')
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj2, 'Science Lab Report', 'Effects of salt in drinking water', 'low', '30-08-2022')

            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Finish To-do app', 'Almost done!', 'medium', '11-09-2022')
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

        $createTaskPopupContainer.appendChild($header)
        $createTaskPopupContainer.appendChild($formBody)
        $createTaskPopupContainer.appendChild($create)
        $createTaskPopupContainer.appendChild($exit)

        $contentDiv.appendChild($createTaskPopupContainer)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FB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cy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlYXJjaENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NvcnRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3ViVGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvaW5wdXRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVJdGVtVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VpLWl0ZW1zL2NyZWF0ZVByb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVTdWJUYXNrVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VpLWl0ZW1zL2NyZWF0ZVRvRG9DYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xyXG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xyXG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xyXG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XHJcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xyXG5cclxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xyXG4gICAgcmV0dXJuIG51bWJlcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XHJcbn0iLCIvKipcclxuICogRGF5cyBpbiAxIHdlZWsuXHJcbiAqXHJcbiAqIEBuYW1lIGRheXNJbldlZWtcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xyXG4vKipcclxuICogRGF5cyBpbiAxIHllYXJcclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcclxuICpcclxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxyXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXHJcbiAqXHJcbiAqIEBuYW1lIGRheXNJblllYXJcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XHJcbi8qKlxyXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cclxuICpcclxuICogQG5hbWUgbWF4VGltZVxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4vKipcclxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXHJcbiAqXHJcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcclxuLyoqXHJcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcclxuICpcclxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcclxuLyoqXHJcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxyXG4gKlxyXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcclxuLyoqXHJcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxyXG4gKlxyXG4gKiBAbmFtZSBtaW5UaW1lXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xyXG4vKipcclxuICogTWludXRlcyBpbiAxIGhvdXJcclxuICpcclxuICogQG5hbWUgbWludXRlc0luSG91clxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcclxuLyoqXHJcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcclxuICpcclxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcclxuLyoqXHJcbiAqIE1vbnRocyBpbiAxIHllYXJcclxuICpcclxuICogQG5hbWUgbW9udGhzSW5ZZWFyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XHJcbi8qKlxyXG4gKiBRdWFydGVycyBpbiAxIHllYXJcclxuICpcclxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XHJcbi8qKlxyXG4gKiBTZWNvbmRzIGluIDEgaG91clxyXG4gKlxyXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XHJcbi8qKlxyXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXHJcbiAqXHJcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge251bWJlcn1cclxuICogQGRlZmF1bHRcclxuICovXHJcblxyXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xyXG4vKipcclxuICogU2Vjb25kcyBpbiAxIGRheVxyXG4gKlxyXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XHJcbi8qKlxyXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xyXG4gKlxyXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XHJcbi8qKlxyXG4gKiBTZWNvbmRzIGluIDEgeWVhclxyXG4gKlxyXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAZGVmYXVsdFxyXG4gKi9cclxuXHJcbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XHJcbi8qKlxyXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcclxuICpcclxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcclxuLyoqXHJcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXHJcbiAqXHJcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBkZWZhdWx0XHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBpc1NhbWVEYXlcclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xyXG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcclxuICogLy89PiB0cnVlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cclxuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcclxuICogLy89PiBmYWxzZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cclxuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcclxuICogLy89PiBmYWxzZVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xyXG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XHJcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xyXG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGlzU2FtZVdlZWtcclxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxyXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cclxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcclxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcclxuICogLy89PiB0cnVlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxyXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cclxuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XHJcbiAqICAgd2Vla1N0YXJ0c09uOiAxXHJcbiAqIH0pXHJcbiAqIC8vPT4gZmFsc2VcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xyXG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcclxuICogLy89PiBmYWxzZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XHJcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xyXG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBpc1RoaXNXZWVrXHJcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcclxuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xyXG4gKiBAcHVyZSBmYWxzZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xyXG4gKlxyXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xyXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cclxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcclxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xyXG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcclxuICogLy89PiB0cnVlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxyXG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxyXG4gKiAvLz0+IGZhbHNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XHJcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIGlzVG9kYXlcclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xyXG4gKiBAcHVyZSBmYWxzZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XHJcbiAqXHJcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXHJcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcclxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xyXG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcclxuICogLy89PiB0cnVlXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XHJcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgcGFyc2VJU09cclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cclxuICpcclxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXHJcbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXHJcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cclxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcclxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcclxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcclxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxyXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XHJcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcclxuXHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xyXG5cclxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgfVxyXG5cclxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xyXG4gIHZhciBkYXRlO1xyXG5cclxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xyXG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcclxuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XHJcbiAgfVxyXG5cclxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICB9XHJcblxyXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcclxuICB2YXIgdGltZSA9IDA7XHJcbiAgdmFyIG9mZnNldDtcclxuXHJcbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcclxuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XHJcblxyXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XHJcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcclxuXHJcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXHJcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXHJcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cclxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxyXG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxyXG5cclxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcclxuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xyXG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcclxufVxyXG52YXIgcGF0dGVybnMgPSB7XHJcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcclxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcclxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXHJcbn07XHJcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcclxudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcclxudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XHJcblxyXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xyXG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xyXG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xyXG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxyXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXHJcblxyXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XHJcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XHJcbiAgfVxyXG5cclxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XHJcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcclxuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcclxuXHJcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xyXG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XHJcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHRpbWVTdHJpbmcpIHtcclxuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcclxuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xyXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xyXG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxyXG5cclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xyXG4gICAgeWVhcjogTmFOLFxyXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXHJcbiAgfTtcclxuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcclxuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxyXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcclxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcclxuXHJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xyXG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcclxuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XHJcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xyXG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XHJcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcclxuXHJcbiAgaWYgKGlzV2Vla0RhdGUpIHtcclxuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XHJcblxyXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xyXG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxyXG5cclxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcclxuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xyXG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XHJcblxyXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcclxuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XHJcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XHJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XHJcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xyXG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcclxuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xyXG5cclxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XHJcbiAgICByZXR1cm4gTmFOO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcclxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xyXG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xyXG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XHJcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XHJcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcclxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXHJcblxyXG5cclxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xyXG5cclxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcclxuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcclxuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XHJcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XHJcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcclxuICBpZiAoaG91cnMgPT09IDI0KSB7XHJcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XHJcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBzdGFydE9mRGF5XHJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxyXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcclxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxyXG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXHJcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgc3RhcnRPZldlZWtcclxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXHJcbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cclxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XHJcbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXHJcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcclxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcclxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcclxuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XHJcblxyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XHJcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cclxuXHJcbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xyXG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcclxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIHRvRGF0ZVxyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcclxuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cclxuICpcclxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXHJcbiAqXHJcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXHJcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcclxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcclxuXHJcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XHJcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcclxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuXHJcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHt0b0RvQ29udHJvbGxlcn0gZnJvbSAnLi90b0RvQ29udHJvbGxlci5qcydcclxuaW1wb3J0IHtwcm9qZWN0Q29udHJvbGxlcn0gZnJvbSAnLi9wcm9qZWN0Q29udHJvbGxlci5qcydcclxuaW1wb3J0IHtzdWJUYXNrQ29udHJvbGxlcn0gZnJvbSAnLi9zdWJUYXNrQ29udHJvbGxlci5qcydcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tICcuL3VpL2Rpc3BsYXlDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IHsgc3RvcmFnZUNvbnRyb2xsZXIgfSBmcm9tICcuL3N0b3JhZ2VDb250cm9sbGVyLmpzJztcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnRJdGVtcyA9IGl0ZW1zO1xyXG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50SXRlbXMoKXtcclxuICAgICAgICByZXR1cm4gY3VycmVudEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRJdGVtcyhuZXdBcnJheSl7XHJcbiAgICAgICAgY3VycmVudEl0ZW1zID0gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKXtcclxuICAgICAgICBsZXQgbmV3VG9EbyA9IHt0eXBlOiAndG9EbycsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIGNvbXBsZXRlOiBmYWxzZX1cclxuXHJcbiAgICAgICAgbmV3VG9Eby5pdGVtSWQgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaXRlbXMucHVzaChuZXdUb0RvKTtcclxuXHJcbiAgICAgICAgbmV3VG9Eby50b0RvSWQgPSB0b0RvQ29udHJvbGxlci5nZXRMZW5ndGgoKVxyXG5cclxuICAgICAgICB0b0RvQ29udHJvbGxlci5jcmVhdGUobmV3VG9EbylcclxuICAgICAgICByZXR1cm4gbmV3VG9Eb1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpe1xyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0ge3R5cGU6ICdwcm9qZWN0JywgdGl0bGUsIHN1YlRhc2tzOiBbXSwgY29tcGxldGU6IGZhbHNlLCBjb21wbGV0ZVRhc2tzOiAwLCBwZXJjZW50YWdlOiAwfVxyXG5cclxuICAgICAgICBuZXdQcm9qZWN0Lml0ZW1JZCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBpdGVtcy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgICBuZXdQcm9qZWN0LnByb2plY3RJZCA9IHByb2plY3RDb250cm9sbGVyLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5jcmVhdGUobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ViVGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKXtcclxuICAgICAgICBjb25zdCBwYXJlbnRJZCA9IHByb2plY3QuaXRlbUlkO1xyXG4gICAgICAgIGxldCBuZXdTdWJUYXNrID0ge3R5cGU6ICdzdWJUYXNrJywgcGFyZW50SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIGNvbXBsZXRlOiBmYWxzZX07XHJcbiAgICAgICAgbmV3U3ViVGFzay5pdGVtSWQgPSBpdGVtcy5sZW5ndGhcclxuICAgICAgICBpdGVtcy5wdXNoKG5ld1N1YlRhc2spO1xyXG5cclxuICAgICAgICBuZXdTdWJUYXNrLnN1YlRhc2tJZCA9IHN1YlRhc2tDb250cm9sbGVyLmdldExlbmd0aCgpXHJcblxyXG4gICAgICAgIHN1YlRhc2tDb250cm9sbGVyLmNyZWF0ZShuZXdTdWJUYXNrKTtcclxuICAgICAgICByZXR1cm4gbmV3U3ViVGFza1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJdGVtKGlkKXtcclxuICAgICAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKGkgPT4gaS5pdGVtSWQgPT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBmb3VuZEl0ZW1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2dJdGVtcygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN1YlRhc2soc3ViVGFzayl7XHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmluZGV4T2YoaXRlbXMuZmluZCggaSA9PiBpLml0ZW1JZCA9PT1zdWJUYXNrLml0ZW1JZCkpLCAxKVxyXG4gICAgICAgIHN1YlRhc2tDb250cm9sbGVyLnJlbW92ZShzdWJUYXNrKVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCl7XHJcbiAgICAgICAgaWYocHJvamVjdC5zdWJUYXNrcyl7XHJcbiAgICAgICAgICAgIHByb2plY3Quc3ViVGFza3MuZm9yRWFjaCh0YXNrID0+e1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlU3ViVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZihpdGVtcy5maW5kKCBpID0+IGkuaXRlbUlkID09PXByb2plY3QuaXRlbUlkKSksIDEpXHJcblxyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLnJlbW92ZShwcm9qZWN0KVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvRG8odG9Ebyl7XHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmluZGV4T2YoaXRlbXMuZmluZCggaSA9PiBpLml0ZW1JZCA9PT10b0RvLml0ZW1JZCkpLCAxKVxyXG4gICAgICAgIHRvRG9Db250cm9sbGVyLnJlbW92ZSh0b0RvKVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEl0ZW1zKCl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRJdGVtcyhuZXdJdGVtcyl7XHJcbiAgICAgICAgaXRlbXMgPSBuZXdJdGVtc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBmaW5kSXRlbSxcclxuICAgICAgICBsb2dJdGVtcyxcclxuICAgICAgICBjcmVhdGVUb0RvLFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXHJcbiAgICAgICAgY3JlYXRlU3ViVGFzayxcclxuICAgICAgICByZW1vdmVTdWJUYXNrLFxyXG4gICAgICAgIGdldEl0ZW1zLFxyXG4gICAgICAgIHJlbW92ZVByb2plY3QsXHJcbiAgICAgICAgcmVtb3ZlVG9EbyxcclxuICAgICAgICBsb2FkSXRlbXMsXHJcbiAgICAgICAgc2V0Q3VycmVudEl0ZW1zLFxyXG4gICAgICAgIGdldEN1cnJlbnRJdGVtcyxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpe1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHByb2plY3Qpe1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUocHJvamVjdCl7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShwcm9qZWN0KSksIDEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFByb2plY3RzKG5ld0l0ZW1zKXtcclxuICAgICAgICBwcm9qZWN0cyA9IG5ld0l0ZW1zXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGdldExlbmd0aCxcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgcmVtb3ZlLFxyXG4gICAgICAgIGdldFByb2plY3RzLFxyXG4gICAgICAgIGxvYWRQcm9qZWN0c1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtwcm9qZWN0Q29udHJvbGxlcn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIlxyXG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL3VpL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBzZWFyY2hDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBzZWFyY2godGV4dCl7XHJcbiAgICAgICAgaWYodGV4dD09ZmFsc2Upe1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBjcmVhdGVDb250cm9sbGVyLmdldEN1cnJlbnRJdGVtcygpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1GaWx0ZXJlZCA9IGl0ZW1zLmZpbHRlciggaT0+IGkudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1GaWx0ZXJlZClcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5zZXRDdXJyZW50SXRlbXMoaXRlbUZpbHRlcmVkKTtcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHNlYXJjaENvbnRyb2xsZXIgfSIsImltcG9ydCB7IGlzVGhpc1dlZWssIGlzVG9kYXksIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NyZWF0ZUNvbnRyb2xsZXInXHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi91aS9kaXNwbGF5Q29udHJvbGxlcic7XHJcblxyXG5jb25zdCBzb3J0Q29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gaXRlbXNUb2RheSgpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zVG9kYXkgPSBbXTtcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUb2RheShwYXJzZUlTTyhpdGVtLmRhdGUpKSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RvZGF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdzdWJUYXNrJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oaXRlbS5wYXJlbnRJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9kYXkucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuc2V0Q3VycmVudEl0ZW1zKGl0ZW1zVG9kYXkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXRlbXNUaGlzV2Vlaygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zVGhpc1dlZWsgPSBbXTtcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUaGlzV2VlayhwYXJzZUlTTyhpdGVtLmRhdGUpKSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RoaXNXZWVrLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09PSAnc3ViVGFzaycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKGl0ZW0ucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1RoaXNXZWVrLnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLnNldEN1cnJlbnRJdGVtcyhpdGVtc1RoaXNXZWVrKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RGFzaCgpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuc2V0Q3VycmVudEl0ZW1zKGl0ZW1zKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvamVjdHMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGNyZWF0ZUNvbnRyb2xsZXIuZ2V0SXRlbXMoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ3N1YlRhc2snKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShpdGVtLnBhcmVudElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuc2V0Q3VycmVudEl0ZW1zKHByb2plY3RzKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b0Rvcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNvbnN0IHRvRG9zID0gW107XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ3RvRG8nKXtcclxuICAgICAgICAgICAgICAgIHRvRG9zLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09PSAnc3ViVGFzaycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKGl0ZW0ucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b0Rvcy5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5zZXRDdXJyZW50SXRlbXModG9Eb3MpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4geyBpdGVtc1RvZGF5LFxyXG4gICAgICAgICAgICBkZWZhdWx0RGFzaCxcclxuICAgICAgICAgICAgaXRlbXNUaGlzV2VlayxcclxuICAgICAgICAgICAgcHJvamVjdHMsXHJcbiAgICAgICAgICAgIHRvRG9zfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgc29ydENvbnRyb2xsZXIgfSIsImltcG9ydCB7Y3JlYXRlQ29udHJvbGxlcn0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiXHJcbmltcG9ydCB7IHByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgdG9Eb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90b0RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdWJUYXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3N1YlRhc2tDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHNhdmVBbGwoKXtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBzYXZlSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQWxsKCl7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnaXRlbXMnKSkge1xyXG4gICAgICAgICAgICBsb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgbG9hZFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIGxvYWRTdWJUYXNrcygpO1xyXG4gICAgICAgICAgICBsb2FkVG9Eb3MoKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZVByb2oxID0gY3JlYXRlQ29udHJvbGxlci5jcmVhdGVQcm9qZWN0KCdLaXRjaGVuIENsZWFudXAnKTtcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHNhbXBsZVByb2oxLCAnQ2xlYW4gdGhlIGRpc2hlcycsICdJbiB0aGUgc2luayBmcm9tIGxhc3QgbmlnaHQnLCAnaGlnaCcsICcyOC0wOC0yMDIyJylcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHNhbXBsZVByb2oxLCAnTW9wIHRoZSBmbG9vcicsICdNb3AgaXMgaW4gdGhlIHV0aWxpdHkgcm9vbScsICdtZWRpdW0nLCAnMzAtMDgtMjAyMicpXHJcblxyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVRvRG8oJ0ZlZWQgdGhlIGRvZycsICdEcnkgZm9vZCBpbiB0aGUgcGFudHJ5JywgJ2xvdycsICcwMS0wOS0yMDIyJylcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVUb0RvKCdDb2xsZWN0IHRoZSBraWRzJywgJ1NjaG9vbCBmaW5pc2hlcyBhdCAxNDowMCcsICdoaWdoJywgJzAyLTA5LTIwMjInKVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlUHJvajIgPSBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoJ1NjaG9vbCBQcm9qZWN0cycpO1xyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2soc2FtcGxlUHJvajIsICdHZW9ncmFwaHkgUmVzZWFyY2ggU3R1ZHknLCAnT24gdm9sY2Fub2VzIGFuZCBlY29ub21pYyBpbXBhY3RzJywgJ2hpZ2gnLCAnMjgtMDgtMjAyMicpXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhzYW1wbGVQcm9qMiwgJ1NjaWVuY2UgTGFiIFJlcG9ydCcsICdFZmZlY3RzIG9mIHNhbHQgaW4gZHJpbmtpbmcgd2F0ZXInLCAnbG93JywgJzMwLTA4LTIwMjInKVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVUb0RvKCdGaW5pc2ggVG8tZG8gYXBwJywgJ0FsbW9zdCBkb25lIScsICdtZWRpdW0nLCAnMTEtMDktMjAyMicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVJdGVtcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpXHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkSXRlbXMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpdGVtcycpKTtcclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLmxvYWRJdGVtcyhpdGVtcylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpdGVtcycpKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGl0ZW1zLmZpbHRlcihpID0+IGkudHlwZSA9PT0gJ3Byb2plY3QnKTtcclxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5sb2FkUHJvamVjdHMocHJvamVjdHMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFRvRG9zKCl7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbXMnKSk7XHJcbiAgICAgICAgY29uc3QgdG9Eb3MgPSBpdGVtcy5maWx0ZXIoaSA9PiBpLnR5cGUgPT09ICd0b0RvJyk7XHJcbiAgICAgICAgdG9Eb0NvbnRyb2xsZXIubG9hZFRvRG9zKHRvRG9zKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRTdWJUYXNrcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpO1xyXG4gICAgICAgIGNvbnN0IHN1YlRhc2tzID0gaXRlbXMuZmlsdGVyKGkgPT4gaS50eXBlID09PSAnc3ViVGFzaycpO1xyXG4gICAgICAgIHN1YlRhc2tDb250cm9sbGVyLmxvYWRTdWJUYXNrcyhzdWJUYXNrcylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgc2F2ZUFsbCxcclxuICAgICAgICBsb2FkQWxsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge3N0b3JhZ2VDb250cm9sbGVyfSIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vdWkvZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHN1YlRhc2tDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHN1YlRhc2tzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCl7XHJcbiAgICAgICAgcmV0dXJuIHN1YlRhc2tzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUoc3ViVGFzayl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRvQWRkVG8gPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2sucGFyZW50SWQpO1xyXG4gICAgICAgIHN1YlRhc2tzLnB1c2goc3ViVGFzayk7XHJcblxyXG4gICAgICAgIHByb2plY3RUb0FkZFRvLnN1YlRhc2tzLnB1c2goc3ViVGFzaylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoc3ViVGFzayl7XHJcbiAgICAgICAgc3ViVGFza3Muc3BsaWNlKHN1YlRhc2tzLmluZGV4T2Yoc3ViVGFza3MuZmluZChpID0+IGkuaXRlbUlkID09PSBzdWJUYXNrLml0ZW1JZCkpLCAxKVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2sucGFyZW50SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmVudFByb2plY3QpXHJcbiAgICAgICAgaWYoc3ViVGFzay5jb21wbGV0ZSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgcGFyZW50UHJvamVjdC5jb21wbGV0ZVRhc2tzID0gcGFyZW50UHJvamVjdC5jb21wbGV0ZVRhc2tzLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZUYXNrID0gcGFyZW50UHJvamVjdC5zdWJUYXNrcy5pbmRleE9mKHBhcmVudFByb2plY3Quc3ViVGFza3MuZmluZChpID0+IGkuaWQgPT09IHN1YlRhc2suaWQpKTtcclxuXHJcbiAgICAgICAgcGFyZW50UHJvamVjdC5zdWJUYXNrcy5zcGxpY2UocGFyZW50UHJvamVjdC5zdWJUYXNrcy5pbmRleE9mKHBhcmVudFByb2plY3Quc3ViVGFza3MuZmluZChpID0+IGkuaXRlbUlkID09PSBzdWJUYXNrLml0ZW1JZCkpLDEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJUYXNrcygpe1xyXG4gICAgICAgIHJldHVybiBzdWJUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkU3ViVGFza3MobmV3SXRlbXMpe1xyXG4gICAgICAgIHN1YlRhc2tzID0gbmV3SXRlbXNcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGdldExlbmd0aCxcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgcmVtb3ZlLFxyXG4gICAgICAgIGdldFN1YlRhc2tzLFxyXG4gICAgICAgIGxvYWRTdWJUYXNrcyxcclxuICAgICAgICBzdWJUYXNrc1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtzdWJUYXNrQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHRvRG9Db250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHRvRG9zID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0b0Rvcy5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodG9Ebyl7XHJcbiAgICAgICAgdG9Eb3MucHVzaCh0b0RvKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZSh0b0RvKXtcclxuICAgICAgICB0b0Rvcy5zcGxpY2UodG9Eb3MuaW5kZXhPZihjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRvRG8pKSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUb0Rvcygpe1xyXG4gICAgICAgIHJldHVybiB0b0RvcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkVG9Eb3MobmV3SXRlbXMpe1xyXG4gICAgICAgIHRvRG9zID0gbmV3SXRlbXNcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kSXRlbShpdGVtSWRzKXtcclxuICAgICAgICByZXR1cm4gdG9Eb3MuZmluZCggaSA9PiBpLml0ZW1JZCA9PT0gaXRlbUlkcylcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgICAgICBnZXRMZW5ndGgsXHJcbiAgICAgICAgcmVtb3ZlLFxyXG4gICAgICAgIGdldFRvRG9zLFxyXG4gICAgICAgIGxvYWRUb0RvcyxcclxuICAgICAgICBmaW5kSXRlbVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHt0b0RvQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gJy4uL2NyZWF0ZUNvbnRyb2xsZXInO1xyXG4gXHJcbmltcG9ydCB7IGNyZWF0ZUl0ZW1VSSB9IGZyb20gJy4vdWktaXRlbXMvY3JlYXRlSXRlbVVJJ1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gJy4vdWktaXRlbXMvY3JlYXRlUHJvamVjdENhcmQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdWJUYXNrVUkgfSBmcm9tICcuL3VpLWl0ZW1zL2NyZWF0ZVN1YlRhc2tVSSc7XHJcbmltcG9ydCB7IGNyZWF0ZVRvRG9DYXJkIH0gZnJvbSAnLi91aS1pdGVtcy9jcmVhdGVUb0RvQ2FyZCc7XHJcbmltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi4vc3RvcmFnZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBzb3J0Q29udHJvbGxlciB9IGZyb20gJy4uL3NvcnRDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCAkY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XHJcbiAgICBjb25zdCAkY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjYXJkQ29udGFpbmVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbVBvcHVwKCl7XHJcbiAgICAgICAgY29uc3QgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgIGxldCAkaGVhZGVyID0gY3JlYXRlSXRlbVVJLmNyZWF0ZUhlYWRlcigpO1xyXG4gICAgICAgIGxldCAkZm9ybUJvZHkgPSBjcmVhdGVJdGVtVUkuY3JlYXRlRm9ybUJvZHkoKTtcclxuICAgICAgICBsZXQgJGNyZWF0ZSA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVDcmVhdGVCdXR0b24oKTtcclxuICAgICAgICBsZXQgJGV4aXQgPSBjcmVhdGVJdGVtVUkuY3JlYXRlRXhpdEJ1dHRvbigpO1xyXG5cclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRoZWFkZXIpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZm9ybUJvZHkpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY3JlYXRlKVxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGV4aXQpXHJcblxyXG4gICAgICAgICRjb250ZW50RGl2LmFwcGVuZENoaWxkKCRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VDcmVhdGVJdGVtUG9wdXAoKXtcclxuICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNyZWF0ZVRhc2tQb3B1cCcpO1xyXG5cclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgICAgIHByb2plY3QuY29tcGxldGVUYXNrcyA9IDBcclxuICAgICAgICBwcm9qZWN0LnN1YlRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRhc2suY29tcGxldGUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jb21wbGV0ZVRhc2tzKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0ICRjb250YWluZXIgPSBjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVDb250YWluZXIocHJvamVjdCk7XHJcbiAgICAgICAgJGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgJHN1YlRhc2tzID0gY3JlYXRlUHJvamVjdENhcmQuY3JlYXRlU3ViVGFza3MocHJvamVjdCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkc3ViVGFza3MpO1xyXG4gICAgICAgIGNvbnN0ICRib3R0b21Db250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5jbGFzc0xpc3QuYWRkKCdib3R0b21JbmZvJylcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENhcmQuY3JlYXRlQWRkQnV0dG9uKHByb2plY3QpKVxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVQZXJjZW50YWdlKHByb2plY3QpKVxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVSZW1vdmVCdXR0b24ocHJvamVjdCkpXHJcblxyXG4gICAgICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGJvdHRvbUNvbnRyb2xzKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8odG9Ebyl7XHJcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGNyZWF0ZVRvRG9DYXJkLmNyZWF0ZUNvbnRhaW5lcih0b0RvKTtcclxuICAgICAgICAkY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJvdHRvbUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUNvbnRyb2xzJyk7XHJcbiAgICAgICAgY29uc3QgJHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZVRvRG9DYXJkLmNyZWF0ZVJlbW92ZUJ1dHRvbih0b0RvKTtcclxuICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSBjcmVhdGVUb0RvQ2FyZC5jcmVhdGVDaGVja0JveCh0b0RvKTtcclxuXHJcbiAgICAgICAgaWYoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0b0RvLml0ZW1JZCkuY29tcGxldGUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAkY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAkY2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUFsbCgpXHJcblxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZCgkY2hlY2tCb3gpO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZCgkcmVtb3ZlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkYm90dG9tQ29udHJvbHMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyRGFzaChmaWx0ZXJlZCA9IGZhbHNlKXtcclxuICAgICAgICBjb25zdCAkY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQgaDEnKTtcclxuICAgICAgICBpZiAoZmlsdGVyZWQgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgaWYoJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9PT0gJ0Rhc2hib2FyZCcpe1xyXG4gICAgICAgICAgICAgICAgc29ydENvbnRyb2xsZXIuZGVmYXVsdERhc2goKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCRjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPT09ICdUb2RheScpe1xyXG4gICAgICAgICAgICAgICAgc29ydENvbnRyb2xsZXIuaXRlbXNUb2RheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9PT0gJ1RoaXMgV2Vlaycpe1xyXG4gICAgICAgICAgICAgICAgc29ydENvbnRyb2xsZXIuaXRlbXNUaGlzV2VlaygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9PT0gJ1Byb2plY3RzJyl7XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29udHJvbGxlci5wcm9qZWN0cygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9PT0gJ1RvRG9zJyl7XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29udHJvbGxlci50b0RvcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtQXJyYXkgPSBjcmVhdGVDb250cm9sbGVyLmdldEN1cnJlbnRJdGVtcygpXHJcbiAgICAgICAgY2xlYW5EYXNoKClcclxuXHJcbiAgICAgICAgaXRlbUFycmF5LmZvckVhY2goaXRlbSA9PntcclxuICAgICAgICAgICAgaWYoaXRlbS50eXBlID09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09ICd0b0RvJyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUb0RvKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFuRGFzaCgpe1xyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN1YlRhc2tQb3B1cChwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUYXNrUG9wdXAnKTtcclxuXHJcbiAgICAgICAgbGV0ICRoZWFkZXIgPSBjcmVhdGVTdWJUYXNrVUkuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgbGV0ICRmb3JtQm9keSA9IGNyZWF0ZVN1YlRhc2tVSS5jcmVhdGVGb3JtQm9keSgpO1xyXG4gICAgICAgIGxldCAkY3JlYXRlID0gY3JlYXRlU3ViVGFza1VJLmNyZWF0ZUNyZWF0ZUJ1dHRvbihwcm9qZWN0KTtcclxuICAgICAgICBsZXQgJGV4aXQgPSBjcmVhdGVTdWJUYXNrVUkuY3JlYXRlRXhpdEJ1dHRvbigpO1xyXG5cclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRoZWFkZXIpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZm9ybUJvZHkpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY3JlYXRlKVxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGV4aXQpXHJcblxyXG4gICAgICAgICRjb250ZW50RGl2LmFwcGVuZENoaWxkKCRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVJdGVtUG9wdXAsXHJcbiAgICAgICAgY2xvc2VDcmVhdGVJdGVtUG9wdXAsXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcclxuICAgICAgICByZW5kZXJEYXNoLFxyXG4gICAgICAgIGNyZWF0ZVN1YlRhc2tQb3B1cFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyfVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc29ydENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vc29ydENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgaW5wdXRDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBwYXJzZUNyZWF0ZUl0ZW0oKXtcclxuICAgICAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInR5cGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRhdGVcIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCh0aXRsZSlcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ3RvRG8nKXtcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5sb2dJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlQ3JlYXRlU3ViVGFzayhwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkYXRlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2socHJvamVjdCwgdGl0bGUsZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKVxyXG5cclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKCk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIubG9nSXRlbXMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwYXJzZUNyZWF0ZUl0ZW0sXHJcbiAgICAgICAgcGFyc2VDcmVhdGVTdWJUYXNrXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBpbnB1dENvbnRyb2xsZXIgfSIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4uL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGlucHV0Q29udHJvbGxlciB9IGZyb20gXCIuLi9pbnB1dENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUl0ZW1VSSA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XHJcbiAgICAgICAgY29uc3QgJGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAkaDIudGV4dENvbnRlbnQ9J0NyZWF0ZSBhbiBJdGVtJztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gJGgyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1Cb2R5KCl7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgICAgICRmb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+VHlwZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwidG9Eb1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJwcm9qZWN0XCI+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9Eb1wiPlRvRG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIj4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxSYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgcmV0dXJuICRmb3JtXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ3JlYXRlQnV0dG9uKCl7XHJcbiAgICAgICAgbGV0ICRjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLmlkID0gJ2J1dHRvbidcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBJdGVtJztcclxuXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0Q29udHJvbGxlci5wYXJzZUNyZWF0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VDcmVhdGVJdGVtUG9wdXAoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNyZWF0ZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV4aXRCdXR0b24oKXtcclxuICAgICAgICBsZXQgJGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLmlkID0gJ3JlbUJ1dHRvbidcclxuICAgICAgICAkY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnRXhpdCc7XHJcblxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjbG9zZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVGb3JtQm9keSxcclxuICAgICAgICBjcmVhdGVIZWFkZXIsXHJcbiAgICAgICAgY3JlYXRlQ3JlYXRlQnV0dG9uLFxyXG4gICAgICAgIGNyZWF0ZUV4aXRCdXR0b25cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlSXRlbVVJfSIsImltcG9ydCB7IHN1YiB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc3RvcmFnZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vc3RvcmFnZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc3ViVGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vc3ViVGFza0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RDYXJkID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHByb2plY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuaWQgPSBwcm9qZWN0Lml0ZW1JZFxyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuXHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aDI+JHtwcm9qZWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFRhc2tDb250YWluZXJcIiBpZD0nJHtwcm9qZWN0Lml0ZW1JZH0nPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG5cclxuICAgICAgICByZXR1cm4gJHByb2plY3RDYXJkQ29udGFpbmVyXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ViVGFza3MocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2LnByb2plY3RUYXNrQ29udGFpbmVyW2lkPScke3Byb2plY3QuaXRlbUlkfSddYCk7XHJcblxyXG4gICAgICAgIHByb2plY3Quc3ViVGFza3MuZm9yRWFjaChzdWJUYXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHByb2plY3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICRwcm9qZWN0VGFzay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGFzaycpO1xyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2suaWQgPSBzdWJUYXNrLml0ZW1JZDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjaXJjbGVDb2xvdXIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYoc3ViVGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmY2ZTZlJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHN1YlRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmZiNDZlJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHN1YlRhc2sucHJpb3JpdHkgPT09ICdsb3cnKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmRmZjhkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHByb2plY3RUYXNrLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbG91ckNpcmNsZVwiIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7Y2lyY2xlQ29sb3VyfTsnPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BUYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7c3ViVGFzay50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtzdWJUYXNrLmRhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tVGFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7c3ViVGFzay5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvdHJhc2gtMi5zdmdcIiBjbGFzcz1cInRyYXNoXCIgaWQ9JyR7c3ViVGFzay5pdGVtSWR9Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD0nJHtzdWJUYXNrLml0ZW1JZH0nPlxyXG4gICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoJHByb2plY3RUYXNrKVxyXG4gICAgICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSAkcHJvamVjdFRhc2sucXVlcnlTZWxlY3RvcihgaW5wdXRgKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5pdGVtSWQpLmNvbXBsZXRlID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICRjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICRwcm9qZWN0VGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkdHJhc2hCdXR0b24gPSAkcHJvamVjdFRhc2sucXVlcnlTZWxlY3RvcihgaW1nYCk7XHJcblxyXG4gICAgICAgICAgICAkdHJhc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tJZCA9IGUudGFyZ2V0LmlkXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nJylcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrVG9SZW0gPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRhc2tJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza1RvUmVtKVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5yZW1vdmVTdWJUYXNrKHRhc2tUb1JlbSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICRjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViVGFza0lkID0gZS50YXJnZXQuaWRcclxuICAgICAgICAgICAgICAgIGxldCBzdWJUYXNrID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShzdWJUYXNrSWQpXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFBhcmVudCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnRJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFza0lkKSkuY29tcGxldGUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFza0lkKS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UGFyZW50LmNvbXBsZXRlVGFza3MtLVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5wZXJjZW50YWdlID0gKHByb2plY3RQYXJlbnQuY29tcGxldGVUYXNrcyAvIHByb2plY3RQYXJlbnQuc3ViVGFza3MubGVuZ3RoKSAqMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwZXJjZW50YWdlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IE1hdGguZmxvb3IocHJvamVjdFBhcmVudC5wZXJjZW50YWdlKSArICclJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZigoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShzdWJUYXNrSWQpKS5jb21wbGV0ZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFza0lkKS5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5jb21wbGV0ZVRhc2tzKytcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5wZXJjZW50YWdlID0gKHByb2plY3RQYXJlbnQuY29tcGxldGVUYXNrcyAvIHByb2plY3RQYXJlbnQuc3ViVGFza3MubGVuZ3RoKSAqMTAwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwZXJjZW50YWdlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDMnKVxyXG4gICAgICAgICAgICAgICAgICAgICRwZXJjZW50YWdlLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcihwcm9qZWN0UGFyZW50LnBlcmNlbnRhZ2UpICsgJyUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcnKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1YlRhc2spXHJcblxyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUFsbCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICByZXR1cm4gJHByb2plY3RUYXNrQ29udGFpbmVyXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUGVyY2VudGFnZShwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCAkcGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocHJvamVjdC5zdWJUYXNrcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBwcm9qZWN0LnBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKChwcm9qZWN0LmNvbXBsZXRlVGFza3MgLyBwcm9qZWN0LnN1YlRhc2tzLmxlbmd0aCkgKjEwMClcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHByb2plY3QucGVyY2VudGFnZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRwZXJjZW50YWdlLnRleHRDb250ZW50ID0gcHJvamVjdC5wZXJjZW50YWdlICsgJyUnXHJcblxyXG4gICAgICAgIHJldHVybiAkcGVyY2VudGFnZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbihwcm9qZWN0KXtcclxuICAgICAgICBsZXQgJGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICRidXQuc3JjPScuL2ltYWdlcy9wbHVzLWNpcmNsZS5zdmcnO1xyXG4gICAgICAgICRidXQuY2xhc3NMaXN0LmFkZCgnYWRkVGFza0J1dHRvbicpXHJcblxyXG4gICAgICAgICRidXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkY2xpY2snKVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFza1BvcHVwKHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRidXRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSZW1vdmVCdXR0b24ocHJvamVjdCl7XHJcbiAgICAgICAgbGV0ICRyYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgJHJidXQuc3JjPScuL2ltYWdlcy90cmFzaC0yLnN2Zyc7XHJcbiAgICAgICAgJHJidXQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdEJ1dHRvbicpXHJcblxyXG4gICAgICAgICRyYnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5yZW1vdmVQcm9qZWN0KHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRyYnV0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcixcclxuICAgICAgICBjcmVhdGVTdWJUYXNrcyxcclxuICAgICAgICBjcmVhdGVQZXJjZW50YWdlLFxyXG4gICAgICAgIGNyZWF0ZUFkZEJ1dHRvbixcclxuICAgICAgICBjcmVhdGVSZW1vdmVCdXR0b25cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0iLCJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBpbnB1dENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vaW5wdXRDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVTdWJUYXNrVUkgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gICAgICAgIGNvbnN0ICRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgJGgyLnRleHRDb250ZW50PSdDcmVhdGUgYSBzdWJ0YXNrJztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gJGgyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1Cb2R5KCl7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgICAgICRmb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCI+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsUmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcblxyXG4gICAgICAgIHJldHVybiAkZm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNyZWF0ZUJ1dHRvbihwcm9qZWN0KXtcclxuICAgICAgICBsZXQgJGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICRjcmVhdGVCdXR0b24uaWQgPSAnYnV0dG9uJ1xyXG4gICAgICAgICRjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIHN1YnRhc2snO1xyXG5cclxuICAgICAgICAkY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaW5wdXRDb250cm9sbGVyLnBhcnNlQ3JlYXRlU3ViVGFzayhwcm9qZWN0KTtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VDcmVhdGVJdGVtUG9wdXAoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNyZWF0ZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV4aXRCdXR0b24oKXtcclxuICAgICAgICBsZXQgJGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLmlkID0gJ3JlbUJ1dHRvbidcclxuICAgICAgICAkY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnRXhpdCc7XHJcblxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjbG9zZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVGb3JtQm9keSxcclxuICAgICAgICBjcmVhdGVIZWFkZXIsXHJcbiAgICAgICAgY3JlYXRlQ3JlYXRlQnV0dG9uLFxyXG4gICAgICAgIGNyZWF0ZUV4aXRCdXR0b25cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlU3ViVGFza1VJfSIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9zdG9yYWdlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdWJUYXNrQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9zdWJUYXNrQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB0b0RvQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi90b0RvQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlVG9Eb0NhcmQgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcih0b0RvKXtcclxuICAgICAgICBjb25zdCAkY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRjYXJkRGl2LmlkID0gdG9Eby5pdGVtSWQ7XHJcbiAgICAgICAgJGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcbiAgICAgICAgbGV0IGNpcmNsZUNvbG91ciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmKHRvRG8ucHJpb3JpdHkgPT09ICdoaWdoJyl7XHJcbiAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmY2ZTZlJztcclxuICAgICAgICB9IGVsc2UgaWYodG9Eby5wcmlvcml0eSA9PT0gJ21lZGl1bScpe1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmYjQ2ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRvRG8ucHJpb3JpdHkgPT09ICdsb3cnKXtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3VyID0gJyNmZGZmOGQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0b0RvLml0ZW1JZCkuY29tcGxldGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkY2FyZERpdi5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0aXRsZVwiPiR7dG9Eby50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29sb3VyQ2lyY2xlXCIgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtjaXJjbGVDb2xvdXJ9Oyc+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgaWQ9XCJkZXNjXCI+JHt0b0RvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8cCBpZD1cImRhdGVcIj4ke3RvRG8uZGF0ZX08L3A+YFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuICRjYXJkRGl2XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKHRvRG8pe1xyXG4gICAgICAgIGNvbnN0ICRyZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICRyZW1vdmVCdXR0b24uc3JjID0gJy4vaW1hZ2VzL3RyYXNoLTIuc3ZnJztcclxuICAgICAgICAkcmVtb3ZlQnV0dG9uLmlkID0gJ3RyYXNoJztcclxuXHJcbiAgICAgICAgJHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIucmVtb3ZlVG9Ebyh0b0RvKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkcmVtb3ZlQnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goKXtcclxuICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICRjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgJGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PntcclxuICAgICAgICAgICAgY29uc3QgJHRvRG8gPSAkY2hlY2tCb3gucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0b0RvSWQgPSAkdG9Eby5pZFxyXG5cclxuICAgICAgICAgICAgaWYoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0b0RvSWQpLmNvbXBsZXRlID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRvRG9JZCkuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkdG9Eby5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUFsbCgpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRvRG9JZCkuY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0odG9Eb0lkKS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgJHRvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnNhdmVBbGwoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlQWxsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNoZWNrQm94O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVDb250YWluZXIsXHJcbiAgICAgICAgY3JlYXRlUmVtb3ZlQnV0dG9uLFxyXG4gICAgICAgIGNyZWF0ZUNoZWNrQm94XHJcbiAgICB9XHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL3VpL2Rpc3BsYXlDb250cm9sbGVyXCJcclxuaW1wb3J0IHsgc3RvcmFnZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9zdG9yYWdlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzb3J0Q29udHJvbGxlciB9IGZyb20gXCIuL3NvcnRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHNlYXJjaENvbnRyb2xsZXIgfSBmcm9tIFwiLi9zZWFyY2hDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCAkY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQgaDEnKTtcclxuY29uc3QgJGRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpI2Rhc2hib2FyZCcpXHJcbmNvbnN0ICRwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpI3Byb2plY3RzJylcclxuY29uc3QgJHRvRG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkjdG9Eb3MnKVxyXG5jb25zdCAkY3JlYXRlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpI2NyZWF0ZVRhc2snKVxyXG5jb25zdCAkdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaSN0b2RheScpXHJcbmNvbnN0ICR0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpI3RoaXNXZWVrJylcclxuY29uc3QgJHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGJhcklucHV0JylcclxuXHJcbiRzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSk9PntcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2VhcmNoQ29udHJvbGxlci5zZWFyY2goZS50YXJnZXQudmFsdWUpXHJcbn0pXHJcblxyXG5cclxuJGNyZWF0ZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlSXRlbVBvcHVwKClcclxufSlcclxuXHJcbiRkYXNoYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ0Rhc2hib2FyZCdcclxuICAgIHNvcnRDb250cm9sbGVyLmRlZmF1bHREYXNoKCk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxufSlcclxuXHJcbiRwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICRjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnXHJcbiAgICBzb3J0Q29udHJvbGxlci5wcm9qZWN0cygpO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbn0pXHJcblxyXG4kdG9Eb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ1RvRG9zJ1xyXG4gICAgc29ydENvbnRyb2xsZXIudG9Eb3MoKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG59KVxyXG5cclxuJHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSdcclxuICAgIHNvcnRDb250cm9sbGVyLml0ZW1zVG9kYXkoKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG59KVxyXG5cclxuJHRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgJGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnXHJcbiAgICBzb3J0Q29udHJvbGxlci5pdGVtc1RoaXNXZWVrKCk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxufSlcclxuXHJcblxyXG5cclxuc3RvcmFnZUNvbnRyb2xsZXIubG9hZEFsbCgpXHJcbnNvcnRDb250cm9sbGVyLmRlZmF1bHREYXNoKCk7XHJcblxyXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=