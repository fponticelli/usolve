package usolve;

enum Strength {
  Required;
  Strong;
  Medium;
  Weak;
  Strength(symbolicWeight : Int, w2 : Int, w3 : Int);
}

class Strengths {
  public static function toString(strength : Strength)
    return switch strength {
      case Required: 'Required';
      case Strong: 'Strong';
      case Medium: 'Medium';
      case Weak: 'Weak';
      case Strength(s, w2, w3): 'Strength($s, $w2, $w3)';
    };
}
