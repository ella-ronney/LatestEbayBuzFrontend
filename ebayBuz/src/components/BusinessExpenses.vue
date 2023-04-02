<template>
    <div>
        <div class="text-center">
            <h2>Expense Manager</h2>
        </div>
        <div class="mx-5">
            <h2>Total eBay Payouts: $ 137,800.5</h2>
            <h2> Dad Payments: $ 13,000.00</h2>
            <h2>{{this.currentYear}} Business Expenses to 3/31</h2>
            <b-table striped bordered hover :items="businessExpenses" :fields="expenses"></b-table>
            <h2>Insurance Expenses</h2>
            <b-table :items="insuranceExpenses" striped bordered hover :fields="insuranceFields"></b-table>
            <h2>Car Mileage Log</h2>
            <b-table :items="carLogs" striped bordered hover :fields="carRecordFields">
                <template #cell(totalMiles)="data">
                    <b-form-input v-model="data.value" @change="updateCarTotalMiles(data.item, data.value)"></b-form-input>
                </template>
            </b-table>
        </div>
        <div class="mx-5">
            <button class="btn btn-info text-light" style="margin-right: 10px;" @click="buzExpense = !buzExpense">Add Business Expense</button>
            <button class="btn btn-info text-light" style="margin-right: 10px;" @click="insExpense = !insExpense">Add Insurance Expense</button>
            <button class="btn btn-info text-light" @click="carRecord = !carRecord">Add Car Log</button>
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
                            <b-col><b-form-group label="Business %"><b-form-input v-model="expenseForm.businessPercentage"></b-form-input></b-form-group></b-col>
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
        <div v-if="carRecord" class="mx-5">
            <h2>Car Mileage Log</h2>
            <b-card bg-variant="light">
                <h5>Record Type</h5>
                <b-card>
                    <b-row>
                        <b-col><b-form-group label="Record Amount"><b-form-select v-model="carForm.recordAmount" :options="recordAmount" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                        <b-col v-if="carForm.recordAmount!='Single'"><b-form-group label="Saturday DropOffs"><b-form-select v-model="carForm.satDropOff" :options="boolDropDown" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                    </b-row>
                </b-card>
                <h5>Car Record</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="Car"><b-form-select v-model="carForm.car" :options="carLocation" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            <b-col><b-form-group label="Purpose"><b-form-select v-model="carForm.purpose" :options="drivePurpose" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            <b-col v-if="carForm.purpose == 'Package DropOff'"><b-form-group label="Package Drop Off Location"><b-form-select v-model="carForm.destination" :options="dropOffLocations" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            <b-col v-if="carForm.purpose == 'Business Supplies/Furniture'"><b-form-group label="Store Name"><b-form-input v-model="carForm.destination"></b-form-input></b-form-group></b-col>
                            <b-col v-if="carForm.purpose == 'Business Supplies/Furniture'"><b-form-group label="Miles Traveled"><b-form-input v-model="carForm.distanceTraveled"></b-form-input></b-form-group></b-col>
                        </b-row>
                        <b-row>
                            <b-col><b-form-group label="Start Date"><b-form-input v-model="carForm.startDate" type="date"></b-form-input></b-form-group></b-col>
                            <b-col v-if="carForm.recordAmount != 'Single'"><b-form-group label="End Date"><b-form-input v-model="carForm.endDate" type="date"></b-form-input></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
            </b-card>
            <div style="display:flex; justify-content:flex-end" class="mt-3">
                <button class="btn btn-success btn-sm" @click="addCarLog()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
            </div>
        </div>
        <div class="mx-5">
            <h2>Quarterly Reporting</h2>
            <h4>Washingtion</h4>
            <h4>FL</h4>
            <p>TODO Remove this section </p>
            <p>TODO Button functionality</p>
            
            <b-card bg-variant="light">
                <h5>Quarter Reporting Form</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="FL Sells"><b-form-input v-model="quarterReportingForm.flSells"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="Quarter"><b-form-select v-model="quarterReportingForm.quarter" class="form-select form-select-font-size-lg" :options="quarters"></b-form-select></b-form-group></b-col>
                            <b-col><b-form-group label="Year"><b-form-input v-model="quarterReportingForm.year"></b-form-input></b-form-group></b-col>
                    </b-row>
                    </b-container>
                </b-card>
                <div style="display:flex; justify-content:flex-end" class="mt-3">
                    <button class="btn btn-info text-light" @click="getQuarterlyExpenses()">Get Quarterly Expenses</button>
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
            resetCarForm() {
                this.carForm.car = 'WA',
                this.carForm.purpose = 'Package DropOff',
                this.carForm.destination = 'Redmond USPS',
                this.carForm.distanceTraveled = '0',
                this.carForm.startDate = '',
                this.carForm.endDate = '',
                this.carForm.recordAmount = 'Single',
                this.carForm.satDropOff = 'False'
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
            getQuarterlyExpenses() {
                axios.post("https://localhost:44314/BusinessExpenses/GetQuarterlyReporting", this.quarterReportingForm)
                    .then((response) => {
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
            },
            getCarLogs() {
                axios.get("https://localhost:44314/BusinessExpenses/YearlyCarLogs")
                    .then((response) => {
                        this.carLogs = response.data;
                    });
            },
            addCarLog() {
                axios.post("https://localhost:44314/BusinessExpenses/AddCarLog", this.carForm)
                    .then((response) => {
                        console.log(response);
                        this.resetCarForm();
                    }, (error) => {
                        console.log(error);
                    });
            },
            updateCarTotalMiles(item, val) {
                item.totalMiles = val;
                this.updatedCarLogs.push(item);
                axios.put("https://localhost:44314/BusinessExpenses/UpdateCarLogTotalMiles", this.updatedCarLogs)
                    .then((response) => {
                        console.log(response);
                        this.updatedCarLogs = [];
                    }, (error) => {
                        console.log(error);
                        this.updatedCarLogs = [];
                    });
            },
        },
        data() {
            return {
                // Forms
                quarterReportingForm: {
                    flSells: '',
                    quarter: '',
                    year: ''
                },
                expenseForm: {
                    expenseVendor: '',
                    expenseName: '',
                    expenseCategory: '',
                    cost: '',
                    paymentInfo: '',
                    purchaseDate: '',
                    businessPercentage: ''
                },
                insuranceForm: {
                    amount: '',
                    type: '',
                },
                carForm: {
                    car: 'WA',
                    purpose: 'Package DropOff',
                    destination: 'Redmond USPS',
                    distanceTraveled: '0',
                    startDate: '',
                    endDate: '',
                    recordAmount: 'Single',
                    satDropOff: 'False',
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
                    { key: 'officeFurniture', label: 'Office Furniture'},
                    { key: 'food', label: 'Food' },
                    { key: 'car', label: 'Car' },
                    { key: 'travel', label: 'Travel'},
                    { key: 'miscExpenses', label: 'Misc. Expenses' },
                    { key: 'taxes', label: 'Taxes'}
                ],
                carRecordFields: [
                    { key: 'year', label: 'Year'},
                    { key: 'car', label: 'Car' },
                    { key: 'businessMiles', label: 'Business Miles' },
                    { key: 'totalMiles', label: 'Total Miles' },
                    { key: 'businessUsagePercentage', label: 'Business Usage Percentage'},
                    { key: 'totalMilesStartYear', label: 'Total Miles - Start of the Year'}
                ],

                // Atributes
                insuranceExpenses: [],
                businessExpenses: [],
                carLogs: [],
                updatedCarLogs: [],
                buzExpense: false,
                insExpense: false,
                carRecord: false,
                currentYear: new Date().getFullYear(),

                insuranceOptions: ['Claim Refund', 'Insurance Cost', 'Lost Inventory', 'Money Saved'],
                paymentMethods: ['Wells Fargo - 4524', 'Wells Fargo - 0777', 'Wells Fargo - 9386', 'Wells Fargo - Checking',
                    'Chase - Amazon', 'Chase - Freedom', 'Chase - Checking',
                    'American Express - 41002', 'American Express - 01009', 'American Express - Amazon',
                    'PayPal', 'Sychrony', 'Target Card'],
                expenseCategories: ['Supplies', 'Subscriptions',
                    'Office Space (Rent & Insurance)', 'Utilities',
                    'Food', 'Gas', 'Car Expenses (Insurance & Maintance)', 
                    'Travel', 'Inventory', 'Inventory Refunds', 'Shipping Costs', 'Internet',
                    'Computer', 'Office Furniture', 'Misc Business Expenses', 'Taxes'],
                carLocation: ['WA', 'FL'],
                drivePurpose: ['Package DropOff', 'Business Supplies/Furniture'],
                dropOffLocations: ['Redmond USPS', 'Bellevue USPS'],
                recordAmount: ['Single', 'Multiple'],
                boolDropDown: ['False', 'True'],
                quarters: ['Q1','Q2','Q3','Q4'],
            }
        },
        mounted: function () {
            this.getExpenses();
            this.getCarLogs();
        }
    };
</script>