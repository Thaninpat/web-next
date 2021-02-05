"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.useUserLazyQuery = exports.useUserQuery = exports.UserDocument = exports.useMeLazyQuery = exports.useMeQuery = exports.MeDocument = exports.useJobItsLazyQuery = exports.useJobItsQuery = exports.JobItsDocument = exports.useSignUpMutation = exports.SignUpDocument = exports.useSignoutMutation = exports.SignoutDocument = exports.useSignInMutation = exports.SignInDocument = void 0;
var client_1 = require("@apollo/client");
var Apollo = require("@apollo/client");
exports.SignInDocument = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation SignIn($username: String!, $password: String!) {\n    signin(username: $username, password: $password) {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"], ["\n  mutation SignIn($username: String!, $password: String!) {\n    signin(username: $username, password: $password) {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"])));
/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
function useSignInMutation(baseOptions) {
    return Apollo.useMutation(exports.SignInDocument, baseOptions);
}
exports.useSignInMutation = useSignInMutation;
exports.SignoutDocument = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation Signout {\n    signout {\n      message\n    }\n  }\n"], ["\n  mutation Signout {\n    signout {\n      message\n    }\n  }\n"])));
/**
 * __useSignoutMutation__
 *
 * To run a mutation, you first call `useSignoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signoutMutation, { data, loading, error }] = useSignoutMutation({
 *   variables: {
 *   },
 * });
 */
function useSignoutMutation(baseOptions) {
    return Apollo.useMutation(exports.SignoutDocument, baseOptions);
}
exports.useSignoutMutation = useSignoutMutation;
exports.SignUpDocument = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation SignUp($username: String!, $email: String!, $password: String!) {\n    signup(username: $username, email: $email, password: $password) {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"], ["\n  mutation SignUp($username: String!, $email: String!, $password: String!) {\n    signup(username: $username, email: $email, password: $password) {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"])));
/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
function useSignUpMutation(baseOptions) {
    return Apollo.useMutation(exports.SignUpDocument, baseOptions);
}
exports.useSignUpMutation = useSignUpMutation;
exports.JobItsDocument = client_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query JobIts {\n    JobIts {\n      id\n      typeJob\n      comment\n      desiredDate\n      createdAt\n    }\n  }\n"], ["\n  query JobIts {\n    JobIts {\n      id\n      typeJob\n      comment\n      desiredDate\n      createdAt\n    }\n  }\n"
    /**
     * __useJobItsQuery__
     *
     * To run a query within a React component, call `useJobItsQuery` and pass it any options that fit your needs.
     * When your component renders, `useJobItsQuery` returns an object from Apollo Client that contains loading, error, and data properties
     * you can use to render your UI.
     *
     * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
     *
     * @example
     * const { data, loading, error } = useJobItsQuery({
     *   variables: {
     *   },
     * });
     */
])));
/**
 * __useJobItsQuery__
 *
 * To run a query within a React component, call `useJobItsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobItsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobItsQuery({
 *   variables: {
 *   },
 * });
 */
function useJobItsQuery(baseOptions) {
    return Apollo.useQuery(exports.JobItsDocument, baseOptions);
}
exports.useJobItsQuery = useJobItsQuery;
function useJobItsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.JobItsDocument, baseOptions);
}
exports.useJobItsLazyQuery = useJobItsLazyQuery;
exports.MeDocument = client_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query Me {\n    me {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"], ["\n  query Me {\n    me {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"
    /**
     * __useMeQuery__
     *
     * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
     * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
     * you can use to render your UI.
     *
     * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
     *
     * @example
     * const { data, loading, error } = useMeQuery({
     *   variables: {
     *   },
     * });
     */
])));
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
function useMeQuery(baseOptions) {
    return Apollo.useQuery(exports.MeDocument, baseOptions);
}
exports.useMeQuery = useMeQuery;
function useMeLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MeDocument, baseOptions);
}
exports.useMeLazyQuery = useMeLazyQuery;
exports.UserDocument = client_1.gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  query User {\n    users {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"], ["\n  query User {\n    users {\n      id\n      email\n      username\n      roles\n      createdAt\n    }\n  }\n"
    /**
     * __useUserQuery__
     *
     * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
     * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
     * you can use to render your UI.
     *
     * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
     *
     * @example
     * const { data, loading, error } = useUserQuery({
     *   variables: {
     *   },
     * });
     */
])));
/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
function useUserQuery(baseOptions) {
    return Apollo.useQuery(exports.UserDocument, baseOptions);
}
exports.useUserQuery = useUserQuery;
function useUserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.UserDocument, baseOptions);
}
exports.useUserLazyQuery = useUserLazyQuery;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
