export class Order {
    _id: number;
    get id(): number {return this._id; }
    set id(id: number) { this._id = id;}

    _name: string;
    get name(): string {return this._name; }
    set name(name: string) { this._name = name;}

    _description: string;
    get description(): string {return this._description; }
    set description(description: string) { this._description = description;}

    _price: number;
    get price(): number {return this._price; }
    set price(price: number) { this._price = price;}

    
    _totalPrice: number;
    get totalPrice(): number {return this._totalPrice; }
    set totalPrice(totalPrice: number) { this._totalPrice = totalPrice;}

    _size: number;
    get size(): number {return this._size; }
    set size(size: number) { this._size = size;}

    _quantity: number;
    get quantity(): number {return this._quantity; }
    set quantity(quantity: number) { this._quantity = quantity;}

}