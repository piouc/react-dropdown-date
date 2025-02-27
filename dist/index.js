Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var YearPicker = /** @class */ (function (_super) {
    __extends(YearPicker, _super);
    function YearPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderYearOptions = function () {
            var _a = _this.props, start = _a.start, end = _a.end, reverse = _a.reverse, optionClasses = _a.optionClasses, defaultValue = _a.defaultValue;
            var startYear = start || 1900;
            var endYear = end || new Date().getFullYear();
            var years = [];
            if (startYear <= endYear) {
                for (var i = startYear; i <= endYear; ++i) {
                    years.push(i);
                }
            }
            else {
                for (var i = endYear; i >= startYear; --i) {
                    years.push(i);
                }
            }
            if (reverse) {
                years.reverse();
            }
            var yearOptions = [];
            yearOptions.push(React__namespace.createElement("option", { value: "", key: -1, className: optionClasses }, defaultValue ? defaultValue : ''));
            years.forEach(function (year, index) {
                yearOptions.push(React__namespace.createElement("option", { value: year, key: index, className: optionClasses }, year));
            });
            return yearOptions;
        };
        _this.handleSelectionChange = function (e) { return _this.props.onChange(e.target.value); };
        _this.render = function () {
            var _a = _this.props, id = _a.id, name = _a.name, classes = _a.classes, required = _a.required, disabled = _a.disabled, value = _a.value;
            return (React__namespace.createElement("select", { id: id, name: name, className: classes, required: required === true, disabled: disabled === true, onChange: _this.handleSelectionChange, value: value }, _this.renderYearOptions()));
        };
        return _this;
    }
    return YearPicker;
}(React__namespace.Component));

var monthByNumber = {
    0: '1',
    1: '2',
    2: '3',
    3: '4',
    4: '5',
    5: '6',
    6: '7',
    7: '8',
    8: '9',
    9: '10',
    10: '11',
    11: '12'
};
var daysInMonth = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
};

var MonthPicker = /** @class */ (function (_super) {
    __extends(MonthPicker, _super);
    function MonthPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderMonthOptions = function () {
            var _a = _this.props, endYearGiven = _a.endYearGiven, year = _a.year, numeric = _a.numeric, caps = _a.caps, short = _a.short, optionClasses = _a.optionClasses, defaultValue = _a.defaultValue;
            var today = new Date();
            var months = [];
            var month = 11;
            if (!endYearGiven) {
                if (year && parseInt(year.toString()) === today.getFullYear()) {
                    month = today.getMonth();
                }
            }
            if (numeric) {
                for (var i = 0; i <= month; ++i) {
                    months.push((i + 1).toString());
                }
            }
            else {
                for (var i = 0; i <= month; ++i) {
                    months.push(monthByNumber[i]);
                }
                if (caps) {
                    months = months.map(function (month) { return month.toUpperCase(); });
                }
                if (short) {
                    months = months.map(function (month) { return month.substring(0, 3); });
                }
            }
            var monthOptions = [];
            monthOptions.push(React__namespace.createElement("option", { value: "", key: -1, className: optionClasses }, defaultValue ? defaultValue : ''));
            months.forEach(function (month, index) {
                monthOptions.push(React__namespace.createElement("option", { value: index, key: index, className: optionClasses }, month));
            });
            return monthOptions;
        };
        _this.handleSelectionChange = function (e) { return _this.props.onChange(e.target.value); };
        _this.render = function () {
            var _a = _this.props, id = _a.id, name = _a.name, classes = _a.classes, required = _a.required, disabled = _a.disabled, value = _a.value;
            return (React__namespace.createElement("select", { id: id, name: name, className: classes, required: required === true, disabled: disabled === true, value: value, onChange: _this.handleSelectionChange }, _this.renderMonthOptions()));
        };
        return _this;
    }
    return MonthPicker;
}(React__namespace.Component));

var DayPicker = /** @class */ (function (_super) {
    __extends(DayPicker, _super);
    function DayPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderDayOptions = function () {
            var _a = _this.props, month = _a.month, year = _a.year, endYearGiven = _a.endYearGiven, optionClasses = _a.optionClasses, defaultValue = _a.defaultValue;
            var days;
            if (month) {
                if (year && year % 4 === 0 && month === 1) {
                    days = 29;
                }
                else {
                    days = daysInMonth[month];
                }
            }
            else {
                days = 31;
            }
            var today = new Date();
            if (!endYearGiven) {
                if (year === today.getFullYear() && month === today.getMonth()) {
                    days = today.getDate();
                }
            }
            var dayOptions = [];
            dayOptions.push(React__namespace.createElement("option", { value: "", key: -1, className: optionClasses }, defaultValue ? defaultValue : ''));
            for (var i = 1; i <= days; ++i) {
                dayOptions.push(React__namespace.createElement("option", { value: i, key: i, className: optionClasses }, i));
            }
            return dayOptions;
        };
        _this.handleSelectionChange = function (e) { return _this.props.onChange(e.target.value); };
        _this.render = function () {
            var _a = _this.props, id = _a.id, name = _a.name, classes = _a.classes, required = _a.required, disabled = _a.disabled, value = _a.value;
            return (React__namespace.createElement("select", { id: id, name: name, className: classes, onChange: _this.handleSelectionChange, required: required === true, disabled: disabled === true, value: value }, _this.renderDayOptions()));
        };
        return _this;
    }
    return DayPicker;
}(React__namespace.Component));

exports.DropdownComponent = void 0;
(function (DropdownComponent) {
    DropdownComponent["year"] = "year";
    DropdownComponent["month"] = "month";
    DropdownComponent["day"] = "day";
})(exports.DropdownComponent || (exports.DropdownComponent = {}));
var DropdownDate = /** @class */ (function (_super) {
    __extends(DropdownDate, _super);
    function DropdownDate(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDateChange = function (type, value) {
            if (_this.props.onDateChange) {
                var _a = _this.state, selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth, selectedDay = _a.selectedDay;
                if (type === exports.DropdownComponent.year) {
                    selectedYear = value;
                }
                else if (type === exports.DropdownComponent.month) {
                    selectedMonth = value;
                }
                else if (type === exports.DropdownComponent.day) {
                    selectedDay = value;
                }
                if (selectedYear !== -1 && selectedMonth !== -1 && selectedDay !== -1) {
                    _this.props.onDateChange(new Date(selectedYear, selectedMonth, selectedDay));
                }
            }
        };
        _this.handleYearChange = function (e) {
            var year = parseInt(e.target.value);
            _this.setState({ selectedYear: year });
            if (_this.props.onYearChange) {
                _this.props.onYearChange(year);
            }
            _this.handleDateChange(exports.DropdownComponent.year, year);
        };
        _this.handleMonthChange = function (e) {
            var month = parseInt(e.target.value);
            _this.setState({ selectedMonth: month });
            if (_this.props.onMonthChange) {
                _this.props.onMonthChange(monthByNumber[month]);
            }
            _this.handleDateChange(exports.DropdownComponent.month, month);
        };
        _this.handleDayChange = function (e) {
            var day = parseInt(e.target.value);
            _this.setState({ selectedDay: day });
            if (_this.props.onDayChange) {
                _this.props.onDayChange(day);
            }
            _this.handleDateChange(exports.DropdownComponent.day, day);
        };
        _this.renderYear = function () {
            var _a = _this.props, classes = _a.classes, ids = _a.ids, names = _a.names;
            return (React__namespace.createElement("div", { key: "year", id: "dropdown-year", className: (classes && classes.yearContainer) ? classes.yearContainer : undefined },
                React__namespace.createElement("select", { id: (ids && ids.year) ? ids.year : undefined, name: (names && names.year) ? names.year : undefined, className: (classes && classes.year) ? classes.year : undefined, onChange: _this.handleYearChange, value: _this.state.selectedYear }, _this.generateYearOptions())));
        };
        _this.renderMonth = function () {
            var _a = _this.props, classes = _a.classes, ids = _a.ids, names = _a.names;
            return (React__namespace.createElement("div", { key: "month", id: "dropdown-month", className: (classes && classes.monthContainer) ? classes.monthContainer : undefined },
                React__namespace.createElement("select", { id: (ids && ids.month) ? ids.month : undefined, name: (names && names.month) ? names.month : undefined, className: (classes && classes.month) ? classes.month : undefined, onChange: _this.handleMonthChange, value: _this.state.selectedMonth }, _this.generateMonthOptions())));
        };
        _this.renderDay = function () {
            var _a = _this.props, classes = _a.classes, ids = _a.ids, names = _a.names;
            return (React__namespace.createElement("div", { key: "day", id: "dropdown-day", className: (classes && classes.dayContainer) ? classes.dayContainer : undefined },
                React__namespace.createElement("select", { id: (ids && ids.day) ? ids.day : undefined, name: (names && names.day) ? names.day : undefined, className: (classes && classes.day) ? classes.day : undefined, onChange: _this.handleDayChange, value: _this.state.selectedDay }, _this.generateDayOptions())));
        };
        _this.render = function () {
            var classes = _this.props.classes;
            var order = _this.props.order;
            order = order || [exports.DropdownComponent.year, exports.DropdownComponent.month, exports.DropdownComponent.day];
            return (React__namespace.createElement("div", { id: "dropdown-date", className: (classes && classes.dateContainer) ? classes.dateContainer : undefined }, order.map(function (part) {
                return _this.renderParts[part]();
            })));
        };
        var startDate = props.startDate, endDate = props.endDate, selectedDate = props.selectedDate;
        var sDate = startDate ? new Date(startDate) : new Date('1900-01-01');
        var eDate = endDate ? new Date(endDate) : new Date();
        var selDate = selectedDate ? new Date(selectedDate) : null;
        _this.state = {
            startYear: sDate.getFullYear(),
            startMonth: sDate.getMonth(),
            startDay: sDate.getDate(),
            endYear: eDate.getFullYear(),
            endMonth: eDate.getMonth(),
            endDay: eDate.getDate(),
            selectedYear: selDate ? selDate.getFullYear() : -1,
            selectedMonth: selDate ? selDate.getMonth() : -1,
            selectedDay: selDate ? selDate.getDate() : -1
        };
        _this.renderParts = {
            year: _this.renderYear,
            month: _this.renderMonth,
            day: _this.renderDay,
        };
        return _this;
    }
    DropdownDate.getDerivedStateFromProps = function (nextProps, prevState) {
        var selDate = nextProps.selectedDate ? new Date(nextProps.selectedDate) : null;
        var tempSelDate = {
            selectedYear: selDate ? selDate.getFullYear() : -1,
            selectedMonth: selDate ? selDate.getMonth() : -1,
            selectedDay: selDate ? selDate.getDate() : -1
        };
        if (tempSelDate.selectedYear !== prevState.selectedYear) {
            return { selectedYear: tempSelDate.selectedYear };
        }
        if (tempSelDate.selectedMonth !== prevState.selectedMonth) {
            return { selectedMonth: tempSelDate.selectedMonth };
        }
        if (tempSelDate.selectedDay !== prevState.selectedDay) {
            return { selectedDay: tempSelDate.selectedDay };
        }
        return null;
    };
    DropdownDate.prototype.generateYearOptions = function () {
        var _a = this.props, classes = _a.classes, options = _a.options, defaultValues = _a.defaultValues;
        var _b = this.state, startYear = _b.startYear, endYear = _b.endYear;
        var yearOptions = [];
        yearOptions.push(React__namespace.createElement("option", { key: -1, value: "-1", className: (classes && classes.yearOptions) ? classes.yearOptions : undefined }, (defaultValues && defaultValues.year) ? defaultValues.year : ''));
        if (options && options.yearReverse) {
            for (var i = endYear; i >= startYear; i--) {
                yearOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.yearOptions) ? classes.yearOptions : undefined }, i));
            }
        }
        else {
            for (var i = startYear; i <= endYear; i++) {
                yearOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.yearOptions) ? classes.yearOptions : undefined }, i));
            }
        }
        return yearOptions;
    };
    DropdownDate.prototype.generateMonthOptions = function () {
        var _a = this.props, classes = _a.classes, options = _a.options, defaultValues = _a.defaultValues;
        var _b = this.state, startMonth = _b.startMonth, endMonth = _b.endMonth, startYear = _b.startYear, endYear = _b.endYear, selectedYear = _b.selectedYear;
        var months = [];
        if (selectedYear === startYear) {
            for (var i = startMonth; i <= 11; i++) {
                months.push({
                    value: i,
                    month: monthByNumber[i]
                });
            }
        }
        else if (selectedYear === endYear) {
            for (var i = 0; i <= endMonth; i++) {
                months.push({
                    value: i,
                    month: monthByNumber[i]
                });
            }
        }
        else {
            for (var i = 0; i <= 11; i++) {
                months.push({
                    value: i,
                    month: monthByNumber[i]
                });
            }
        }
        if (options && options.monthShort) {
            months = months.map(function (elem) {
                return {
                    value: elem.value,
                    month: elem.month.substring(0, 3)
                };
            });
        }
        if (options && options.monthCaps) {
            months = months.map(function (elem) {
                return {
                    value: elem.value,
                    month: elem.month.toUpperCase()
                };
            });
        }
        var monthOptions = [];
        monthOptions.push(React__namespace.createElement("option", { key: -1, value: "-1", className: (classes && classes.monthOptions) ? classes.monthOptions : undefined }, (defaultValues && defaultValues.month) ? defaultValues.month : ''));
        months.forEach(function (elem) {
            monthOptions.push(React__namespace.createElement("option", { key: elem.value, value: elem.value, className: (classes && classes.monthOptions) ? classes.monthOptions : undefined }, elem.month));
        });
        return monthOptions;
    };
    DropdownDate.prototype.generateDayOptions = function () {
        var _a = this.props, classes = _a.classes, defaultValues = _a.defaultValues;
        var _b = this.state, startYear = _b.startYear, startMonth = _b.startMonth, startDay = _b.startDay, endYear = _b.endYear, endMonth = _b.endMonth, endDay = _b.endDay, selectedYear = _b.selectedYear, selectedMonth = _b.selectedMonth;
        var dayOptions = [];
        dayOptions.push(React__namespace.createElement("option", { key: -1, value: "-1", className: (classes && classes.dayOptions) ? classes.dayOptions : undefined }, (defaultValues && defaultValues.day) ? defaultValues.day : ''));
        var monthDays;
        if (selectedYear === startYear) {
            if (selectedMonth === startMonth) {
                monthDays = (selectedYear % 4 === 0 && selectedMonth === 1) ? daysInMonth[selectedMonth] + 1 : daysInMonth[selectedMonth];
                for (var i = startDay; i <= monthDays; i++) {
                    dayOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.dayOptions) ? classes.dayOptions : undefined }, i));
                }
            }
            else {
                monthDays = (selectedYear % 4 === 0 && selectedMonth === 1) ? daysInMonth[selectedMonth] + 1 : daysInMonth[selectedMonth];
                for (var i = 1; i <= monthDays; i++) {
                    dayOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.dayOptions) ? classes.dayOptions : undefined }, i));
                }
            }
        }
        else if (selectedYear === endYear) {
            if (selectedMonth === endMonth) {
                for (var i = 1; i <= endDay; i++) {
                    dayOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.dayOptions) ? classes.dayOptions : undefined }, i));
                }
            }
            else {
                monthDays = (selectedYear % 4 === 0 && selectedMonth === 1) ? daysInMonth[selectedMonth] + 1 : daysInMonth[selectedMonth];
                for (var i = 1; i <= monthDays; i++) {
                    dayOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.dayOptions) ? classes.dayOptions : undefined }, i));
                }
            }
        }
        else {
            if (selectedMonth) {
                monthDays = (selectedYear % 4 === 0 && selectedMonth === 1) ? daysInMonth[selectedMonth] + 1 : daysInMonth[selectedMonth];
                for (var i = 1; i <= monthDays; i++) {
                    dayOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.dayOptions) ? classes.dayOptions : undefined }, i));
                }
            }
            else {
                for (var i = 1; i <= 31; i++) {
                    dayOptions.push(React__namespace.createElement("option", { key: i, value: i, className: (classes && classes.dayOptions) ? classes.dayOptions : undefined }, i));
                }
            }
        }
        return dayOptions;
    };
    return DropdownDate;
}(React__namespace.Component));

exports.DayPicker = DayPicker;
exports.DropdownDate = DropdownDate;
exports.MonthPicker = MonthPicker;
exports.YearPicker = YearPicker;
//# sourceMappingURL=index.js.map
