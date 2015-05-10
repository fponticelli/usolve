package usolve;

using usolve.Strength;

class AbstractConstraint {
  public var strength : Strength;
  public var weight : Float;
  public var expression : Expression;

  public function new(strength : Strength, weight : Float = 1) {
    this.strength = strength;
    this.weight = weight;
  }

  public function toString()
    return '${strength.toString()} {$weight} ($expression)';
}
