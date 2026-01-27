type BudgetOverviewType = {
  monthly_limit: number;
  current_month_total: number;
  previous_month_total: number;
  budget_utilization: string;
  trend_percentage: string;
};

type KpiTrendsType = {
  budget_change: string;
  tools_change: string;
  departments_change: string;
  cost_per_user_change: string;
};

type CostAnalyticsType = {
  cost_per_user: number;
  previous_cost_per_user: number;
  active_users: number;
  total_users: number;
};

type MetricsType = {
  budget_overview: BudgetOverviewType;
  kpi_trends: KpiTrendsType;
  cost_analytics: CostAnalyticsType;
};

export type {
  MetricsType,
  BudgetOverviewType,
  KpiTrendsType,
  CostAnalyticsType,
};
