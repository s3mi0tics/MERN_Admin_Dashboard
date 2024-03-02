import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User", 
        "Products", 
        "Customers", 
        "Transactions", 
        "Geography", 
        "Sales", 
        "Admins", 
        "Performance", 
        "Dashboard"
    ],
    
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
            onError: (error) => {
                console.error('Error fetching User:', error);
            },
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"],
            onError: (error) => {
                console.error('Error fetching products:', error);
            },
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customers"],
            onError: (error) => {
                console.error('Error fetching customers:', error);
            },
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
                
            }), 
            providesTags: ["Transactions"], 
            onError: (error) => {
                    console.error('Error fetching transactions:', error);
                },
        }),
        getGeography: build.query({
            query: () => "client/geography",
            providesTags: ["Geography"],
            onError: (error) => {
                console.error('Error fetching geography:', error);
            },
        }),
        getSales: build.query({
            query: () => "sales/sales",
            providesTags: ["Sales"],
            onError: (error) => {
                console.error('Error fetching sales:', error);
            },
        }),
        getAdmins: build.query({
            query: () => "management/admins",
            providesTags: ["Admins"],
            onError: (error) => {
                console.error('Error fetching Admins:', error);
            },
        }),
        getUserPerformance: build.query({
            query: (id) => `management/performance/${id}`,
            providesTags: ["Performance"],
            onError: (error) => {
                console.error('Error fetching user performance:', error);
            },
        }),
        getDashboard: build.query ({
            query: () => "general/dashboard",
            providesTags: ["Dashboard"],
            onError: (error) => {
                console.error('Error fetching dashboard:', error);
            },
        })
    })
})

export const { 
    useGetUserQuery,
    useGetProductsQuery, 
    useGetCustomersQuery, 
    useGetTransactionsQuery, 
    useGetGeographyQuery, 
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery,
} = api