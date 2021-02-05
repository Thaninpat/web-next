"use strict";
exports.__esModule = true;
exports.AuthContext = void 0;
var react_1 = require("react");
var graphql_1 = require("../generated/graphql");
var router_1 = require("next/router");
var initialState = {
    authAction: 'close',
    handleAuthAction: function () { },
    loggedInUser: null,
    setAuthUser: function () { }
};
exports.AuthContext = react_1.createContext(initialState);
var AuthContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState('close'), authAction = _b[0], setAuthAction = _b[1];
    var _c = react_1.useState(null), loggedInUser = _c[0], setLoggedInUser = _c[1];
    var _d = graphql_1.useMeQuery(), data = _d.data, loading = _d.loading;
    // if(!!loading) return <Loader/>
    react_1.useEffect(function () {
        if (data === null || data === void 0 ? void 0 : data.me)
            setLoggedInUser(data.me);
    }, [data === null || data === void 0 ? void 0 : data.me]);
    // TODO: เมื่อ signout แท็ปอื่นที่เปิดอยู่ก็จะ signout ออกไปด้วย
    react_1.useEffect(function () {
        var syncSignout = function (e) {
            if (e.key === 'signout') {
                // Log user out
                setLoggedInUser(null);
                // Push user to Sign In page
                router_1["default"].push('/signIn');
            }
        };
        window.addEventListener('storage', syncSignout);
        return function () { return window.removeEventListener('storage', syncSignout); };
    }, []);
    var handleAuthAction = function (action) {
        setAuthAction(action);
    };
    var setAuthUser = function (user) { return setLoggedInUser(user); };
    // console.log(loggedInUser);
    return (react_1["default"].createElement(exports.AuthContext.Provider, { value: {
            authAction: authAction,
            handleAuthAction: handleAuthAction,
            loggedInUser: loggedInUser,
            setAuthUser: setAuthUser
        } }, children));
};
exports["default"] = AuthContextProvider;
