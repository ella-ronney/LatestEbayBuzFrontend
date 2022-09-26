<template>
    <div>
        <div class="text-center">
            <h2>Expense Manager</h2>
        </div>
        <div class="mx-5">
            <h2>{{this.currentYear}} Business Expenses</h2>
            <b-table striped bordered hover :items="businessExpenses" :fields="expenses"></b-table>
            <h2>Insurance Expenses</h2>
            <b-table :items="insuranceExpenses" striped bordered hover :fields="insuranceFields"></b-table>
        </div>
        <div class="mx-5">
            <button class="btn btn-info text-light" style="margin-right: 10px;" @click="buzExpense = !buzExpense">Add Business Expense</button>
            <button class="btn btn-info text-light" @click="insExpense = !insExpense">Add Insurance Expense</button>
        </div>
        <div class="mx-5" v-if="buzExpense">
            <h2>Business Expense Form</h2>
            <b-card bg-variant="light">
                <h5 class="mt-2">Item Details</h5>
                <b-card><b-form-group label="Name"><b-form-input v-model="expenseForm.expenseName"></b-form-input></b-form-group></b-card>
                <h5 class="mt-2">Cost Details</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="Expense Category"><b-form-select v-model="expenseForm.expenseCategory" class="form-select form-select-font-size-lg" :options="expenseCategories"></b-form-select></b-form-group></b-col>
                        </b-row>
                        <b-row>
                            <b-col><b-form-group label="Cost"><b-form-input v-model="expenseForm.cost"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="Payment Info"><b-form-select v-model="expenseForm.paymentInfo" :options="paymentMethods" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            <b-col><b-form-group label="Expense Date"><b-form-input v-model="expenseForm.purchaseDate" type="date"></b-form-input></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
            </b-card>
            <div style="display: flex; justify-content: flex-end" class="mt-3">
                <button class="btn btn-success btn-sm" @click="sendExpenseForm()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
            </div>
        </div>
        <div class="mx-5" v-if="insExpense">
            <h2>Insurance Expense Form</h2>
            <b-card variant="light">
                <h5>Insurance Details</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="Insurance Expense Type"><b-form-select :options="insuranceOptions" class="form-select form-select-font-size-lg" v-model="insuranceForm.type"></b-form-select></b-form-group></b-col>
                            <b-col> <b-form-group label="Amount"><b-form-input v-model="insuranceForm.amount" type="number"></b-form-input></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
                <div style="display: flex; justify-content: flex-end" class="mt-3">
                    <button class="btn btn-success btn-sm" @click="sendInsuranceForm()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
                </div>
            </b-card>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'BusinessExpenses',
        methods: {
            resetExpenseForm() {
                this.expenseForm.expenseName = '',
                this.expenseForm.expenseCategory = '',
                this.expenseForm.cost = '',
                this.expenseForm.paymentInfo = '',
                this.expenseForm.purchaseDate = ''
            },
            sendExpenseForm() {
                axios.post("https://localhost:44314/BusinessExpenses/AddExpense", this.expenseForm)
                    .then((response) => {
                        console.log(response);
                        this.resetExpenseForm();
                    }, (error) => {
                        console.log(error);
                    });
            },
            getExpenses() {
                axios.get("https://localhost:44314/BusinessExpenses/GetExpenseTotals")
                    .then((response) => {
                        this.businessExpenses = response.data;
                    });
            },
        },
        data() {
            return {
                // Forms
                expenseForm: {
                    expenseVendor: '',
                    expenseName: '',
                    expenseCategory: '',
                    cost: '',
                    paymentInfo: '',
                    purchaseDate: '',
                },
                insuranceForm: {
                    amount: '',
                    type: '',
                },

                // Fields 
                insuranceFields: [
                    { key: 'insuranceTotal', label: 'Insurance Costs' },
                    { key: 'claimTotal', label: 'Claim Refunds' },
                    { key: 'losses', label: 'Lost Inventory' },
                    { key: 'saved', label: 'Money Saved' },
                ],
                expenses: [
                    { key: 'inventory', label: 'Inventory' },
                    { key: 'supplies', label: 'Supplies' },
                    { key: 'subscriptions', label: 'Subscriptions' },
                    { key: 'officeSpace', label: 'Office Space' },
                    { key: 'utilities', label: 'Utilities' },
                    { key: 'food', label: 'Food' },
                    { key: 'gas', label: 'Gas' },
                    { key: 'car', label: 'Car' },
                    { key: 'travel', label: 'Travel'},
                    { key: 'miscExpenses', label: 'Misc. Expenses' }
                ],

                // Atributes
                insuranceExpenses: [],
                businessExpenses: [],
                buzExpense: false,
                insExpense: false,
                currentYear: new Date().getFullYear(),

                insuranceOptions: ['Claim Refund', 'Insurance Cost', 'Lost Inventory', 'Money Saved'],
                paymentMethods: ['Wells Fargo - 4524', 'Wells Fargo - 0777', 'Wells Fargo - 9386', 'Wells Fargo - Checking',
                    'Chase - Amazon', 'Chase - Freedom',
                    'American Express - 41002', 'American Express - 01009', 'American Express - Amazon',
                    'PayPal', 'Sychrony'],
                expenseCategories: ['Supplies', 'Subscriptions',
                    'Office Space (Rent & Insurance)', 'Utilities',
                    'Food', 'Gas', 'Car Expenses (Insurance & Maintance)', 
                    'Travel', 'Misc Business Expenses'],
            }
        },
        mounted: function () {
            this.getExpenses();
        }
    };
</script>