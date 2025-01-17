define(
  function() {
    var Enum = {
      TransactionType: {
        Return: 'Return',
        Sale: 'Sale',
        SalesCredit: 'Sales Credit',
        SalesPayment: 'Sales Payment',
        SalesRefund: 'Sales Refund',
        Quote: 'Quote',
        Order: 'Order',
        UpdateInvoice: 'Update Invoice',
        UpdateOrder: 'Update Order',
        UpdateQuote: 'Update Quote',
        ConvertOrder: 'Convert Order',
        ConvertQuote: 'Convert Quote',
        Suspend: 'Suspend',
        ResumeSale: 'Resume Sale',
        VoidTransaction: 'VoidTransaction',
        Recharge: 'Recharge',
      },

      PaymentType: {
        Cash: 'Cash/Other',
        Check: 'Check/Cheque',
        CreditCard: 'Credit Card',
        CreditMemo: 'Credit Memo',
        Gift: 'Gift Card/Certificate',
        Loyalty: 'Loyalty Points',
        GiftCard: 'Gift Card',
        GiftCertificate: 'Gift Certificate',
      },

      LookupMode: {
        SalesPayment: 'Sales Payment',
        SalesRefund: 'Sales Refund',
        SalesCredit: 'Sales Credit',
        Invoice: 'Invoice',
        Order: 'Order',
        Quote: 'Quote',
        Return: 'Return',
        UpdateInvoice: 'Update Invoice',
        UpdateOrder: 'Update Order',
        UpdateQuote: 'Update Quote',
        ConvertOrder: 'Convert Order',
        ConvertQuote: 'Convert Quote',
        Suspend: 'Suspend',
        VoidTransaction: 'VoidTransaction',
        Recharge: 'Recharge',
      },

      ActionType: {
        ItemDiscount: 'ItemDiscount',
        SaleDiscount: 'SaleDiscount',
        VoidItem: 'VoidItem',
        VoidTransaction: 'VoidTransaction',
        Returns: 'Returns',
        SalesCredit: 'SalesCredit',
        SalesRefund: 'SalesRefund',
        ChangePrice: 'ChangePrice',
        AutoAllocate: 'AutoAllocateItems'
      },

      ItemType: {
        MatrixGroup: "Matrix Group",
        MatrixItem: "Matrix Item",
        NonStock: "Non-Stock",
        Stock: "Stock",
        Labor: "Labor",
        Service: "Service",
        Kit: "Kit",
        ElectronicDownload: "Electronic Download",
        Assembly: "Assembly",
        Bundle: "Bundle",
        GiftCard: "Gift Card",
        GiftCertificate: "Gift Certificate",
        Kit: "Kit"
      },

      SerialLotType: {
        Lot: "Lot",
        Serial: "Serial"
      },

      GroupType: {
        Required: "Requried",
        Optional: "Optional",
        MultiSelect: "Multi-Select"
      }

    }

    return Enum;
  }
);
