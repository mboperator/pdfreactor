export default [
  {
    "id": 9581,
    "attribute": "blank",
    "all_reference_column_ids": [],
    "calculable": true,
    "description": "Calculated Column",
    "filterable": false,
    "groupable": false,
    "label": "blank",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9581?budget_line_item_id="
    },
    "name": "blank",
    "position": 17,
    "type": "formula"
  },
  {
    "id": 9580,
    "attribute": "Projected over Under",
    "all_reference_column_ids": [],
    "calculable": true,
    "description": "Calculated Column",
    "filterable": false,
    "groupable": false,
    "label": "Projected over Under",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9580?budget_line_item_id="
    },
    "name": "Projected over Under",
    "position": 16,
    "type": "formula"
  },
  {
    "id": 9579,
    "attribute": "Estimated Cost at Completion",
    "all_reference_column_ids": [
      9580
    ],
    "calculable": true,
    "description": "Calculated Column",
    "filterable": false,
    "groupable": false,
    "label": "Estimated Cost at Completion",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9579?budget_line_item_id="
    },
    "name": "Estimated Cost at Completion",
    "position": 15,
    "type": "formula"
  },
  {
    "id": 9578,
    "attribute": "Forecast To Complete",
    "all_reference_column_ids": [
      9579,
      9580
    ],
    "calculable": true,
    "description": "Calculated Column",
    "filterable": false,
    "groupable": false,
    "label": "Forecast To Complete",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9578?budget_line_item_id="
    },
    "name": "Forecast To Complete",
    "position": 14,
    "type": "formula"
  },
  {
    "id": 9577,
    "attribute": "Projected Costs",
    "all_reference_column_ids": [
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Calculated Column",
    "filterable": false,
    "groupable": false,
    "label": "Projected Costs",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9577?budget_line_item_id="
    },
    "name": "Projected Costs",
    "position": 13,
    "type": "formula"
  },
  {
    "id": 9576,
    "attribute": "Pending Cost Changes",
    "all_reference_column_ids": [
      9577,
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Configured Column",
    "filterable": false,
    "groupable": false,
    "label": "Pending Cost Changes",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9576?budget_line_item_id="
    },
    "name": "Pending Cost Changes",
    "position": 12,
    "type": "source"
  },
  {
    "id": 9575,
    "attribute": "Committed Costs",
    "all_reference_column_ids": [
      9577,
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Configured Column",
    "filterable": false,
    "groupable": false,
    "label": "Committed Costs",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9575?budget_line_item_id="
    },
    "name": "Committed Costs",
    "position": 10,
    "type": "source"
  },
  {
    "id": 9574,
    "attribute": "Projected Budget",
    "all_reference_column_ids": [
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Calculated Column",
    "filterable": false,
    "groupable": false,
    "label": "Projected Budget",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9574?budget_line_item_id="
    },
    "name": "Projected Budget",
    "position": 9,
    "type": "formula"
  },
  {
    "id": 9573,
    "attribute": "Revised Budget",
    "all_reference_column_ids": [
      9574,
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Calculated Column",
    "filterable": false,
    "groupable": false,
    "label": "Revised Budget",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9573?budget_line_item_id="
    },
    "name": "Revised Budget",
    "position": 7,
    "type": "formula"
  },
  {
    "id": 9572,
    "attribute": "Pending Budget Changes",
    "all_reference_column_ids": [
      9574,
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Configured Column",
    "filterable": false,
    "groupable": false,
    "label": "Pending Budget Changes",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9572?budget_line_item_id="
    },
    "name": "Pending Budget Changes",
    "position": 8,
    "type": "source"
  },
  {
    "id": 9571,
    "attribute": "Direct Costs",
    "all_reference_column_ids": [
      9577,
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Configured Column",
    "filterable": false,
    "groupable": false,
    "label": "Direct Costs",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9571?budget_line_item_id="
    },
    "name": "Direct Costs",
    "position": 11,
    "type": "source"
  },
  {
    "id": 9570,
    "attribute": "Approved COs",
    "all_reference_column_ids": [
      9573,
      9574,
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Configured Column",
    "filterable": false,
    "groupable": false,
    "label": "Approved COs",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9570?budget_line_item_id="
    },
    "name": "Approved COs",
    "position": 6,
    "type": "source"
  },
  {
    "id": 9569,
    "attribute": "biller",
    "all_reference_column_ids": [],
    "calculable": false,
    "description": "Standard Column",
    "filterable": true,
    "groupable": true,
    "label": "Sub Job",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9569?budget_line_item_id="
    },
    "name": "biller",
    "position": 0,
    "type": "standard"
  },
  {
    "id": 9568,
    "attribute": "project",
    "all_reference_column_ids": [],
    "calculable": false,
    "description": "Standard Column",
    "filterable": false,
    "groupable": true,
    "label": "Project",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9568?budget_line_item_id="
    },
    "name": "project",
    "position": null,
    "type": "standard"
  },
  {
    "id": 9567,
    "attribute": "budget_modifications",
    "all_reference_column_ids": [
      9573,
      9574,
      9578,
      9579,
      9580,
      9581
    ],
    "calculable": true,
    "description": "Standard Column",
    "filterable": false,
    "groupable": false,
    "label": "Budget Modifications",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9567?budget_line_item_id="
    },
    "name": "budget_modifications",
    "position": 5,
    "type": "standard"
  },
  {
    "id": 9566,
    "attribute": "original_budget_amount",
    "all_reference_column_ids": [
      9573,
      9574,
      9578,
      9579,
      9580
    ],
    "calculable": true,
    "description": "Standard Column",
    "filterable": false,
    "groupable": false,
    "label": "Original Budget Amount",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9566?budget_line_item_id="
    },
    "name": "original_budget_amount",
    "position": 4,
    "type": "standard"
  },
  {
    "id": 9565,
    "attribute": "category",
    "all_reference_column_ids": [],
    "calculable": false,
    "description": "Standard Column",
    "filterable": true,
    "groupable": true,
    "label": "Category",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9565?budget_line_item_id="
    },
    "name": "category",
    "position": 3,
    "type": "standard"
  },
  {
    "id": 9564,
    "attribute": "cost_code",
    "all_reference_column_ids": [],
    "calculable": false,
    "description": "Standard Column",
    "filterable": false,
    "groupable": true,
    "label": "Cost Code",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9564?budget_line_item_id="
    },
    "name": "cost_code",
    "position": 2,
    "type": "standard"
  },
  {
    "id": 9563,
    "attribute": "root_cost_code",
    "all_reference_column_ids": [],
    "calculable": false,
    "description": "Standard Column",
    "filterable": true,
    "groupable": true,
    "label": "Division",
    "links": {
      "detail": "https://app.procore.com/projects/14406/budgets/531/details/9563?budget_line_item_id="
    },
    "name": "root_cost_code",
    "position": 1,
    "type": "standard"
  }
];
