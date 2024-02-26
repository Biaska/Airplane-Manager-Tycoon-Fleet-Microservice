CREATE OR REPLACE TABLE route(
    id INT AUTO_INCREMENT,
    src varchar(3) DEFAULT NULL,
    dest varchar(3) DEFAULT NULL,
    dist int unsigned DEFAULT NULL,
    tax int unsigned DEFAULT NULL,
    audit_price_eco int unsigned DEFAULT NULL,
    audit_price_bus int unsigned DEFAULT NULL,
    audit_price_first int unsigned DEFAULT NULL,
    audit_price_cargo int unsigned DEFAULT NULL,
    audit_demand_eco int unsigned DEFAULT NULL,
    audit_demand_bus int unsigned DEFAULT NULL,
    audit_demand_first int unsigned DEFAULT NULL,
    audit_demand_cargo int unsigned DEFAULT NULL,
    ideal_price_eco int unsigned DEFAULT NULL,
    ideal_price_bus int unsigned DEFAULT NULL,
    ideal_price_first int unsigned DEFAULT NULL,
    ideal_price_cargo int unsigned DEFAULT NULL,
    capacity int unsigned DEFAULT NULL,
    PRIMARY KEY(id)
)

CREATE TABLE hub(
    id INT AUTO_INCREMENT,
    iata varchar(3) NOT NULL UNIQUE,
    sheet_id varchar(50) DEFAULT NULL,
    PRIMARY KEY(id)
);