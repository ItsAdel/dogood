<template>
  <div id="do-donate-wrapper">
    <h3>Be compassionate</h3>
    <b-container v-if="searched" id="do-donate-wrapper">
      <b-row v-for="charity in this.charities" :key="charity.nonprofitId" id="do-left-row">
        <b-col id="row-text"><h4>{{ charity.name }}</h4>
          <br><p> {{ charity.mission }} </p>
        </b-col>

      </b-row>
    </b-container>
    <div id="search-container" v-else>
      <p>Search for a category of non profit to donate to</p>
      <b-input-group prepend="Category" class="mt-3">
      <b-form-input v-model="searchStr"></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="handleSearch(searchStr)">Search</b-button>
      </b-input-group-append>
    </b-input-group>
    </div>
  </div>
</template>
 
<script>
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const parser = require('fast-xml-parser');
  const http = new XMLHttpRequest();
 
  export default {
    data() {
      return {
        searchStr: "",
        charities: null,
        searched: false
      }
    },
    methods: {
        getCharities: async function  (str) {
        let proxyUrl = 'https://pure-earth-54253.herokuapp.com/'
        let url = "http://svcs.ebay.com/services/fundraising/FundRaisingFindingService/v1";
        http.open('POST', proxyUrl + url, true);
        http.setRequestHeader("Content-type", "application/xml");
        http.setRequestHeader("X-EBAY-SOA-OPERATION-NAME", "findNonprofit");
        http.setRequestHeader("X-EBAY-SOA-GLOBAL-ID", "EBAY-US");
        http.setRequestHeader("X-EBAY-SOA-SECURITY-APPNAME", "AdelAckb-dogood-PRD-469e8f5f8-cde7df54");
        let that = this
        http.onreadystatechange = function() {//Call a function when the state changes.
            const xmlData = http.responseText;
            const options = {
                attributeNamePrefix : "@_",
                attrNodeName: "attr", //default is 'false'
                textNodeName : "#text",
                ignoreAttributes : true,
                ignoreNameSpace : false,
                allowBooleanAttributes : false,
                parseNodeValue : true,
                parseAttributeValue : false,
                trimValues: true,
                cdataTagName: "__cdata", //default is 'false'
                cdataPositionChar: "\\c",
                parseTrueNumberOnly: false,
                arrayMode: false, //"strict"
                attrValueProcessor: a => a,
                tagValueProcessor : a => a,
                stopNodes: ["parse-me-as-string"]
            };

            if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
                const jsonObj = parser.parse(xmlData,options);
                console.log(jsonObj.findNonprofitResponse.nonprofit);
                // TODO: ADD NEXT PART OF WORKFLOW HERE !
                that.charities = jsonObj.findNonprofitResponse.nonprofit
                that.searched = true
            }
        };
        let params = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
              "<findNonprofitRequest xmlns=\"http://www.ebay.com/marketplace/fundraising/v1/services\">\n" +
              "    <searchFilter>\n" +
              "        <keywords>" + str + "</keywords>\n" +
              "    </searchFilter>\n" +
              "    <outputSelector>Mission</outputSelector>\n" +
              "    <outputSelector>Address</outputSelector>\n" +
              "    <outputSelector>LargeLogoURL</outputSelector>\n" +
              "    <outputSelector>PopularityIndex</outputSelector>\n" +
              "    <outputSelector>EIN</outputSelector>\n" +
              "    <outputSelector>Description</outputSelector>\n" +
              "    <outputSelector>SecondaryName</outputSelector>\n" +
              "    <outputSelector>Domain</outputSelector>\n" +
              "    <outputSelector>FavoriteCount</outputSelector>\n" +
              "    <outputSelector>FundsRaised</outputSelector>\n" +
              "    <paginationInput>\n" +
              "        <pageNumber>1</pageNumber>\n" +
              "        <pageSize>25</pageSize>\n" +
              "    </paginationInput>\n" +
              "</findNonprofitRequest>";

        //Send the proper header information along with the request
        http.send(params);
        },
      handleSearch: function(str) {
        this.getCharities(str)
      }
    },
  }
</script>

<style scoped>
  #do-donate-wrapper {
    margin-top: 10%;
    text-align: center;
  }

  #do-left-row {
    text-align: left;
    padding: 3%;
    border: 1px solid salmon;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  #search-container {
    margin-top: 20%;
  }
</style>