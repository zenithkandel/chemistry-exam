const quizData = [
  {
    "id": 1,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "easy",
    "question": "The total number of electrons possible for quantum number 'n' is",
    "options": [
      {
        "id": "A",
        "text": "n"
      },
      {
        "id": "B",
        "text": "n\u00b2"
      },
      {
        "id": "C",
        "text": "2n"
      },
      {
        "id": "D",
        "text": "2n\u00b2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The total number of electrons possible in a shell with quantum number 'n' is given by the formula 2n\u00b2. This is because each orbital can hold a maximum of 2 electrons, and the number of orbitals in a shell is n\u00b2. For example, for n=1: 2(1)\u00b2=2 electrons, for n=2: 2(2)\u00b2=8 electrons."
  },
  {
    "id": 2,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "easy",
    "question": "Which of the following contains only ionic bonds?",
    "options": [
      {
        "id": "A",
        "text": "CO\u2082"
      },
      {
        "id": "B",
        "text": "CaCl\u2082"
      },
      {
        "id": "C",
        "text": "NH\u2084Cl"
      },
      {
        "id": "D",
        "text": "H\u2082O"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CaCl\u2082 is an ionic compound formed between calcium (a metal) and chlorine (nonmetal), resulting in ionic bonding throughout. CO\u2082 has covalent bonds, NH\u2084Cl has both ionic (NH\u2084\u207a and Cl\u207b) and covalent bonds (N-H), and H\u2082O has covalent bonds (O-H)."
  },
  {
    "id": 3,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Which of the following contains both covalent and ionic bonds?",
    "options": [
      {
        "id": "A",
        "text": "CCl\u2084"
      },
      {
        "id": "B",
        "text": "CaCl\u2082"
      },
      {
        "id": "C",
        "text": "NH\u2084Cl"
      },
      {
        "id": "D",
        "text": "H\u2082O"
      }
    ],
    "correctAnswer": "C",
    "explanation": "NH\u2084Cl contains both ionic and covalent bonds. The ammonium ion (NH\u2084\u207a) has covalent N-H bonds, while the ionic bond exists between NH\u2084\u207a and Cl\u207b. CCl\u2084 and H\u2082O have only covalent bonds; CaCl\u2082 has only ionic bonds."
  },
  {
    "id": 4,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Which of the following ions is most stable?",
    "options": [
      {
        "id": "A",
        "text": "CH\u2083CH\u2082\u207a"
      },
      {
        "id": "B",
        "text": "(CH\u2083)\u2082CH\u207a"
      },
      {
        "id": "C",
        "text": "(CH\u2083)\u2083C\u207a"
      },
      {
        "id": "D",
        "text": "C\u2086H\u2085CH\u2082\u207a"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The tertiary carbocation (CH\u2083)\u2083C\u207a is most stable due to the maximum hyperconjugation and inductive effects from the three methyl groups. Carbocation stability increases in the order: primary < secondary < tertiary. The three alkyl groups stabilize the positive charge through electron donation."
  },
  {
    "id": 5,
    "type": "mcq",
    "category": "Electrochemistry",
    "difficulty": "hard",
    "question": "In the following equation, the value of 'X' is: 2S\u2082O\u2083\u00b2\u207b \u2192 S\u2084O\u2086\u00b2\u207b + X",
    "options": [
      {
        "id": "A",
        "text": "2e\u207b"
      },
      {
        "id": "B",
        "text": "3e\u207b"
      },
      {
        "id": "C",
        "text": "4e\u207b"
      },
      {
        "id": "D",
        "text": "5e\u207b"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In this redox reaction, S\u2082O\u2083\u00b2\u207b (where S has +2 oxidation state) is oxidized to S\u2084O\u2086\u00b2\u207b (where S has +2.5 average oxidation state). The oxidation state of each sulfur increases, resulting in the loss of 2 electrons (X = 2e\u207b)."
  },
  {
    "id": 6,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "easy",
    "question": "The total number of orbitals possible for quantum number 'n' is",
    "options": [
      {
        "id": "A",
        "text": "n"
      },
      {
        "id": "B",
        "text": "n\u00b2"
      },
      {
        "id": "C",
        "text": "2n"
      },
      {
        "id": "D",
        "text": "2n\u00b2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The number of orbitals in a shell with quantum number 'n' is n\u00b2. For n=1: 1 orbital (1s), for n=2: 4 orbitals (2s, 2p\u00d73), for n=3: 9 orbitals (3s, 3p\u00d73, 3d\u00d75). Each orbital can hold maximum 2 electrons."
  },
  {
    "id": 7,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "medium",
    "question": "The mass of 1 atom of Hydrogen is",
    "options": [
      {
        "id": "A",
        "text": "1.66 \u00d7 10\u207b\u00b2\u2074 g"
      },
      {
        "id": "B",
        "text": "1.66 \u00d7 10\u207b\u00b2\u00b3 g"
      },
      {
        "id": "C",
        "text": "1.66 \u00d7 10\u207b\u00b2\u2077 kg"
      },
      {
        "id": "D",
        "text": "1.06 \u00d7 10\u207b\u00b2\u2074 g"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The mass of one hydrogen atom is approximately 1.66 \u00d7 10\u207b\u00b2\u2074 g. This is calculated as the molar mass (1 g/mol) divided by Avogadro's number (6.023 \u00d7 10\u00b2\u00b3). This is also known as the atomic mass unit (amu)."
  },
  {
    "id": 8,
    "type": "mcq",
    "category": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Which alkane would have only primary and tertiary carbon?",
    "options": [
      {
        "id": "A",
        "text": "Pentane"
      },
      {
        "id": "B",
        "text": "2-methylbutane"
      },
      {
        "id": "C",
        "text": "2,2-dimethylpropane"
      },
      {
        "id": "D",
        "text": "2,3-dimethylbutane"
      }
    ],
    "correctAnswer": "C",
    "explanation": "2,2-dimethylpropane (neopentane) has the structure C(CH\u2083)\u2084 with one central quaternary carbon (tertiary counting from the outer carbons) and four terminal primary carbons. It contains only primary and tertiary carbons, with no secondary carbons."
  },
  {
    "id": 9,
    "type": "mcq",
    "category": "Hydrocarbons",
    "difficulty": "easy",
    "question": "The unsaturated aliphatic compound is",
    "options": [
      {
        "id": "A",
        "text": "C\u2083H\u2088"
      },
      {
        "id": "B",
        "text": "C\u2086H\u2086"
      },
      {
        "id": "C",
        "text": "C\u2086H\u2081\u2082"
      },
      {
        "id": "D",
        "text": "CH\u2084"
      }
    ],
    "correctAnswer": "C",
    "explanation": "C\u2086H\u2081\u2082 is an unsaturated aliphatic compound (alkene). It contains one double bond. C\u2083H\u2088 and CH\u2084 are saturated alkanes. C\u2086H\u2086 is benzene, which is aromatic, not aliphatic despite being unsaturated. Unsaturated means it contains C=C or C\u2261C bonds."
  },
  {
    "id": 10,
    "type": "mcq",
    "category": "Aromatic Chemistry",
    "difficulty": "easy",
    "question": "Benzene readily undergoes",
    "options": [
      {
        "id": "A",
        "text": "Addition"
      },
      {
        "id": "B",
        "text": "Substitution"
      },
      {
        "id": "C",
        "text": "Elimination"
      },
      {
        "id": "D",
        "text": "Rearrangement"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Benzene undergoes electrophilic substitution reactions (nitration, halogenation, Friedel-Crafts alkylation/acylation) due to its stable aromatic structure. Addition reactions would destroy the aromatic ring's stability, hence are unfavorable."
  },
  {
    "id": 11,
    "type": "mcq",
    "category": "General Chemistry",
    "difficulty": "easy",
    "question": "The number of molecules in 36 mg of water (H\u2082O) is",
    "options": [
      {
        "id": "A",
        "text": "12 \u00d7 10\u00b9\u2079"
      },
      {
        "id": "B",
        "text": "6.023 \u00d7 10\u00b2\u00b3"
      },
      {
        "id": "C",
        "text": "12 \u00d7 10\u00b2\u00b9"
      },
      {
        "id": "D",
        "text": "1.2 \u00d7 10\u00b2\u00b9"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Molar mass of H\u2082O = 18 g/mol. 36 mg = 0.036 g. Number of moles = 0.036/18 = 0.002 mol. Number of molecules = 0.002 \u00d7 6.023 \u00d7 10\u00b2\u00b3 = 1.2 \u00d7 10\u00b2\u00b9"
  },
  {
    "id": 12,
    "type": "mcq",
    "category": "Stoichiometry",
    "difficulty": "easy",
    "question": "The volume of carbon dioxide obtained at NTP by heating 10 g of calcium carbonate which is 80% pure is",
    "options": [
      {
        "id": "A",
        "text": "22.4 L"
      },
      {
        "id": "B",
        "text": "2.24 L"
      },
      {
        "id": "C",
        "text": "1.792 L"
      },
      {
        "id": "D",
        "text": "11.2 L"
      }
    ],
    "correctAnswer": "C",
    "explanation": "CaCO\u2083 \u2192 CaO + CO\u2082. Pure CaCO\u2083 = 10 \u00d7 0.80 = 8 g. Molar mass of CaCO\u2083 = 100 g/mol. Moles = 8/100 = 0.08 mol. From stoichiometry, 1 mol CaCO\u2083 produces 1 mol CO\u2082. Volume at NTP = 0.08 \u00d7 22.4 = 1.792 L"
  },
  {
    "id": 13,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "medium",
    "question": "What is the percentage increase in volume of a gas when its pressure is decreased by 20% at constant temperature?",
    "options": [
      {
        "id": "A",
        "text": "20%"
      },
      {
        "id": "B",
        "text": "22.5%"
      },
      {
        "id": "C",
        "text": "24.3%"
      },
      {
        "id": "D",
        "text": "25%"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Using Boyle's Law (PV = constant). If pressure decreases by 20%, new P = 0.8P. V\u2081P\u2081 = V\u2082P\u2082 \u2192 V\u2081(P) = V\u2082(0.8P) \u2192 V\u2082 = 1.25V\u2081. Percentage increase = (1.25 - 1)/1 \u00d7 100 = 25%"
  },
  {
    "id": 14,
    "type": "mcq",
    "category": "Chemical Equilibrium",
    "difficulty": "hard",
    "question": "For the reaction N\u2082 + 3H\u2082 \u21cc 2NH\u2083, the relationship between Kp and Kc is",
    "options": [
      {
        "id": "A",
        "text": "Kc = Kp"
      },
      {
        "id": "B",
        "text": "Kp = Kc(RT)"
      },
      {
        "id": "C",
        "text": "Kp = Kc(RT)\u00b2"
      },
      {
        "id": "D",
        "text": "Kp = Kc(RT)\u00b3"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The relationship is Kp = Kc(RT)^\u0394n where \u0394n = change in number of moles = (2) - (1+3) = -2. So Kp = Kc(RT)\u207b\u00b2. Rearranging: Kp = Kc/(RT)\u00b2. For this specific reaction with negative \u0394n, the correct relationship can be shown as Kc = Kp(RT)\u00b2."
  },
  {
    "id": 15,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Which of the following will show metamerism?",
    "options": [
      {
        "id": "A",
        "text": "CH\u2083SC\u2082H\u2085"
      },
      {
        "id": "B",
        "text": "CH\u2083COC\u2082H\u2085"
      },
      {
        "id": "C",
        "text": "CH\u2083OCH\u2083"
      },
      {
        "id": "D",
        "text": "CH\u2083OC\u2082H\u2085"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CH\u2083COC\u2082H\u2085 (methyl ethyl ketone) shows metamerism. It has the same molecular formula as propyl formate (HCOOC\u2082H\u2085), demonstrating metamerism - a type of isomerism where the functional group is in different positions."
  },
  {
    "id": 16,
    "type": "mcq",
    "category": "Solutions",
    "difficulty": "easy",
    "question": "Solution of SO\u2082 in water is called",
    "options": [
      {
        "id": "A",
        "text": "Thiosulphurous acid"
      },
      {
        "id": "B",
        "text": "Sulphurous acid"
      },
      {
        "id": "C",
        "text": "Thiosulphuric acid"
      },
      {
        "id": "D",
        "text": "Hydrosulphuric acid"
      }
    ],
    "correctAnswer": "B",
    "explanation": "SO\u2082 + H\u2082O \u2192 H\u2082SO\u2083 (sulphurous acid). This is the correct nomenclature. Thiosulphuric and thiosulphurous acids contain sulfur in different oxidation states and are different compounds."
  },
  {
    "id": 17,
    "type": "mcq",
    "category": "Periodic Table",
    "difficulty": "hard",
    "question": "Brass is an alloy of",
    "options": [
      {
        "id": "A",
        "text": "Copper and lead"
      },
      {
        "id": "B",
        "text": "Copper and tin"
      },
      {
        "id": "C",
        "text": "Copper and zinc"
      },
      {
        "id": "D",
        "text": "Copper and nickel"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Brass is an alloy of copper and zinc. It contains approximately 50-90% copper and 10-50% zinc, making it harder and more ductile than pure copper. Bronze, on the other hand, is an alloy of copper and tin."
  },
  {
    "id": 18,
    "type": "short_question",
    "category": "Atomic Structure",
    "difficulty": "medium",
    "question": "Mention the postulates of Bohr's atomic model.",
    "marks": 2,
    "answer": "The postulates of Bohr's atomic model are:\n1. Electron revolves around the nucleus in definite circular orbits.\n2. Electrons move in orbits with specific angular momentum (mvr = nh/2\u03c0).\n3. Electrons in these orbits have definite energy and do not radiate energy while moving.\n4. Energy is absorbed or emitted only when an electron jumps from one orbit to another.\n5. The maximum number of electrons in an orbit is 2n\u00b2, where n is the orbit number.",
    "explanation": "Bohr's model was a breakthrough in explaining the structure of atoms and the spectral lines of hydrogen. It successfully predicted energy levels and could explain the stability of atoms, though it was later superseded by the quantum mechanical model."
  },
  {
    "id": 19,
    "type": "short_question",
    "category": "Atomic Structure",
    "difficulty": "easy",
    "question": "State Aufbau principle. Write the electronic configuration of chromium.",
    "marks": 2,
    "answer": "Aufbau Principle: Electrons fill orbitals in order of increasing energy. Electrons occupy the lowest energy orbitals first before filling higher energy orbitals.\nOrder: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p...\n\nElectronic Configuration of Chromium (Cr, Z = 24):\n1s\u00b2 2s\u00b2 2p\u2076 3s\u00b2 3p\u2076 3d\u2075 4s\u00b9\nOr: [Ar] 3d\u2075 4s\u00b9\n\nNote: Chromium is an exception because a half-filled d orbital (3d\u2075) is more stable than 3d\u2074 4s\u00b2.",
    "explanation": "The Aufbau principle helps predict electron configurations. Chromium is notable for its exception to the normal order due to the extra stability of half-filled and fully-filled d orbitals."
  },
  {
    "id": 20,
    "type": "short_question",
    "category": "Atomic Structure",
    "difficulty": "hard",
    "question": "Write possible values of all quantum numbers for n = 4.",
    "marks": 4,
    "answer": "For n = 4, the possible values of quantum numbers are:\n\n1. Principal Quantum Number (n) = 4\n\n2. Azimuthal Quantum Number (l): 0, 1, 2, 3 (corresponding to s, p, d, f orbitals)\n\n3. Magnetic Quantum Number (m\u2097):\n   \u2022 For l = 0 (s): m\u2097 = 0 (1 value)\n   \u2022 For l = 1 (p): m\u2097 = -1, 0, +1 (3 values)\n   \u2022 For l = 2 (d): m\u2097 = -2, -1, 0, +1, +2 (5 values)\n   \u2022 For l = 3 (f): m\u2097 = -3, -2, -1, 0, +1, +2, +3 (7 values)\n\n4. Spin Quantum Number (m\u209b): \u00b11/2 (two values)\n\nTotal orbitals for n = 4: 1 + 3 + 5 + 7 = 16 orbitals\nTotal electrons for n = 4: 16 \u00d7 2 = 32 electrons",
    "explanation": "Understanding quantum numbers is crucial for predicting electron positions and orbital shapes. Each set of quantum numbers defines a unique orbital."
  },
  {
    "id": 21,
    "type": "short_question",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Explain with reason: (i) Boiling point of water is higher than expected. (ii) Ionic compounds are generally brittle.",
    "marks": 2,
    "answer": "(i) Boiling point of water is higher than expected:\n\u2022 Water molecules are held together by hydrogen bonding.\n\u2022 Hydrogen bonds are stronger than van der Waals forces (dipole-dipole or London dispersion forces).\n\u2022 Extra energy is needed to break these hydrogen bonds, raising the boiling point.\n\u2022 Similar compounds like H\u2082S, H\u2082Se have much lower boiling points as they lack hydrogen bonding.\n\n(ii) Ionic compounds are generally brittle:\n\u2022 Ionic compounds have rigid crystal structures with strong electrostatic attractions.\n\u2022 When mechanical stress is applied, layers of the crystal shift.\n\u2022 Likly charges (repulsion) align, causing the crystal to shatter.\n\u2022 Unlike metals, ionic compounds cannot deform without breaking the structure.",
    "explanation": "These properties arise from the nature of bonding and crystal structures. Understanding these helps in predicting material properties."
  },
  {
    "id": 22,
    "type": "short_question",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Draw the Lewis structure of: (i) NH\u2084\u207a (ii) H\u2082SO\u2084",
    "marks": 2,
    "answer": "(i) NH\u2084\u207a (Ammonium ion):\n     H\n     |\n  H-N-H\n     |\n     H\n\n\u2022 Nitrogen has 4 bonding pairs (covalent bonds with 4 hydrogen atoms).\n\u2022 Total electrons: N(5) + 4H(4) - 1(charge) = 12 electrons = 6 pairs\n\u2022 All bonds are single covalent bonds.\n\u2022 Overall charge: +1\n\n(ii) H\u2082SO\u2084 (Sulphuric acid):\n     O\n     ||\n  H-O-S=O\n     |\n     O-H\n\n\u2022 Sulfur is the central atom.\n\u2022 Two S=O double bonds and two S-O single bonds to OH groups.\n\u2022 Total valence electrons: S(6) + 4O(24) + 2H(2) = 32 electrons\n\u2022 Sulfur exhibits expanded octet (10 electrons).",
    "explanation": "Lewis structures show valence electrons and bonding arrangements. They help predict molecular geometry and polarity."
  },
  {
    "id": 23,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "hard",
    "question": "Why can a real gas be solidified, but an ideal gas cannot?",
    "marks": 4,
    "answer": "A real gas can be solidified but an ideal gas cannot because:\n\n1. Intermolecular Forces:\n   \u2022 Real gases have intermolecular forces (van der Waals forces) between molecules.\n   \u2022 These forces can be increased by applying pressure and lowering temperature.\n   \u2022 When attractive forces exceed kinetic energy, molecules come together to form liquid, then solid.\n\n2. Ideal Gas Assumptions:\n   \u2022 Ideal gases are assumed to have NO intermolecular forces.\n   \u2022 Gas molecules are assumed to have negligible volume.\n   \u2022 These assumptions are violated at high pressure and low temperature.\n\n3. Real Gas Behavior:\n   \u2022 Real gases deviate from ideal behavior at high pressure and low temperature.\n   \u2022 At critical conditions of temperature and pressure, real gases can liquify.\n   \u2022 Upon further cooling, liquids can freeze to form solids.\n\n4. Mathematical Perspective:\n   \u2022 For an ideal gas: PV = nRT (no phase transitions occur)\n   \u2022 For a real gas: The van der Waals equation accounts for intermolecular forces and volume: (P + an\u00b2/V\u00b2)(V - nb) = nRT\n   \u2022 This allows for phase transitions.",
    "explanation": "This explains why we can liquefy and solidify gases in practice, contrary to the ideal gas model which predicts they would remain gaseous under all conditions."
  },
  {
    "id": 24,
    "type": "short_question",
    "category": "Molecular Geometry",
    "difficulty": "medium",
    "question": "Predict the geometry of SF\u2086 on the basis of VSEPR Theory.",
    "marks": 2,
    "answer": "Geometry of SF\u2086 (Sulfur hexafluoride):\n\n1. Valence Electrons:\n   \u2022 Sulfur: 6 valence electrons\n   \u2022 6 Fluorine atoms: 6 electrons\n   \u2022 Total: 12 electron pairs (all bonding)\n\n2. Steric Number:\n   \u2022 Number of bonded atoms = 6\n   \u2022 Number of lone pairs = 0\n   \u2022 Steric number = 6\n\n3. VSEPR Geometry:\n   \u2022 Electron geometry: Octahedral\n   \u2022 Molecular geometry: Octahedral\n\n4. Bond Angles:\n   \u2022 All S-F bonds are at 90\u00b0 to each other\n   \u2022 All F-S-F angles = 90\u00b0\n\n5. Hybridization:\n   \u2022 Sulfur undergoes sp\u00b3d\u00b2 hybridization\n   \u2022 This allows formation of 6 equivalent bonds",
    "explanation": "SF\u2086 is a perfect octahedron, which explains its exceptional stability and inertness. It's used as an insulating gas in high-voltage equipment."
  },
  {
    "id": 25,
    "type": "short_question",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Write the differences between Sigma (\u03c3) and Pi (\u03c0) bonds. Which one is stronger?",
    "marks": 3,
    "answer": "Differences between Sigma (\u03c3) and Pi (\u03c0) bonds:\n\n| Property | Sigma Bond | Pi Bond |\n|----------|-----------|----------|\n| Definition | Direct overlap of atomic orbitals along the internuclear axis | Lateral/side-by-side overlap of p or d orbitals |\n| Electron density | Concentrated between nuclei on the bond axis | Concentrated above and below the bond axis |\n| Type | Can form from s-s, s-p, or p-p orbital overlap | Forms only from p-p or d-d orbital overlap |\n| Strength | Stronger | Weaker |\n| Rotation | Free rotation possible | No free rotation (restricted) |\n| Number | Single bond has 1 \u03c3 | Double bond has 1 \u03c3 + 1 \u03c0; Triple bond has 1 \u03c3 + 2 \u03c0 |\n| Example | C-H, C-C, N-N | C=C, C\u2261C |\n\nWhich is stronger?\n\u2022 Sigma bonds are stronger than pi bonds because:\n  - Better overlap between orbitals\n  - More direct electron density between nuclei\n  - Requires more energy to break",
    "explanation": "Understanding \u03c3 and \u03c0 bonds is essential for explaining molecular structure, rotation restrictions, and reactivity patterns in organic chemistry."
  },
  {
    "id": 26,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "medium",
    "question": "Write down the postulates of Kinetic Molecular Theory of gases.",
    "marks": 3,
    "answer": "Postulates of Kinetic Molecular Theory (KMT):\n\n1. Nature of Gas Particles:\n   \u2022 Gases consist of a large number of tiny particles (molecules or atoms).\n   \u2022 These particles are in constant, random, rapid motion.\n\n2. Volume of Particles:\n   \u2022 The volume of individual gas particles is negligible compared to the total volume of the container.\n   \u2022 Most of the volume occupied by gas is empty space.\n\n3. Intermolecular Forces:\n   \u2022 There are no significant attractive or repulsive forces between gas molecules.\n   \u2022 Collisions between molecules are perfectly elastic.\n\n4. Collisions:\n   \u2022 Gas particles collide with container walls and with each other.\n   \u2022 These collisions are perfectly elastic (no loss of kinetic energy).\n\n5. Pressure Origin:\n   \u2022 Pressure exerted by a gas is due to collisions of gas molecules with container walls.\n   \u2022 Pressure is proportional to the frequency and force of collisions.\n\n6. Temperature Relationship:\n   \u2022 The average kinetic energy of gas molecules is directly proportional to absolute temperature.\n   \u2022 Temperature (K) \u221d Average Kinetic Energy\n   \u2022 KE_avg = (3/2)kT, where k is Boltzmann constant",
    "explanation": "KMT provides a molecular explanation for gas laws and properties. It forms the foundation for understanding gas behavior and enables prediction of properties at various conditions."
  },
  {
    "id": 27,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "medium",
    "question": "Why real gases deviate from ideal gas behavior?",
    "marks": 2,
    "answer": "Real gases deviate from ideal gas behavior for the following reasons:\n\n1. Intermolecular Forces:\n   \u2022 Real gas molecules experience attractive and repulsive forces (van der Waals forces).\n   \u2022 These forces are stronger at high pressures and low temperatures.\n   \u2022 Ideal gas model ignores these forces.\n\n2. Molecular Volume:\n   \u2022 Real gas molecules occupy measurable volume.\n   \u2022 At high pressures, the volume of molecules is significant compared to container volume.\n   \u2022 Ideal gas model assumes negligible molecular volume.\n\n3. High Pressure Effects:\n   \u2022 At high pressures, repulsive forces become important.\n   \u2022 Molecules are forced closer together, violating ideal gas assumptions.\n   \u2022 The compressibility factor Z deviates significantly from 1.\n\n4. Low Temperature Effects:\n   \u2022 At low temperatures, kinetic energy decreases.\n   \u2022 Attractive forces become more dominant.\n   \u2022 Gas may liquefy before reaching zero temperature.\n\n5. Critical Conditions:\n   \u2022 Near the critical point, gases show maximum deviation from ideality.\n   \u2022 The compressibility factor Z can be much less than 1.\n\nVan der Waals Equation accounts for these factors:\n(P + an\u00b2/V\u00b2)(V - nb) = nRT",
    "explanation": "Understanding deviations helps predict when ideal gas law is applicable (usually at high T and low P) and when more accurate equations like van der Waals must be used."
  },
  {
    "id": 28,
    "type": "short_question",
    "category": "Dalton's Law",
    "difficulty": "medium",
    "question": "State and explain Dalton's Law of Partial Pressure. Give one application of this law.",
    "marks": 3,
    "answer": "Dalton's Law of Partial Pressure:\n\nStatement:\n\"The total pressure exerted by a mixture of non-reacting gases is equal to the sum of the partial pressures of individual gases.\"\nP_total = P\u2081 + P\u2082 + P\u2083 + ... + P\u2099\n\nExplanation:\n\u2022 Each gas in a mixture exerts pressure independent of other gases.\n\u2022 The partial pressure of a gas is the pressure it would exert if it alone occupied the entire volume at the same temperature.\n\u2022 Since gas molecules have negligible volume and no intermolecular forces (in ideal conditions), they behave independently.\n\nMathematical Expression:\n\u2022 For a gas mixture: P_total = n_total \u00d7 RT/V\n\u2022 Partial pressure: P\u1d62 = n\u1d62 \u00d7 RT/V = X\u1d62 \u00d7 P_total\n  where X\u1d62 is the mole fraction of gas i\n\nApplications:\n\n1. Collection of Gases over Water:\n   \u2022 When a gas is collected over water, the total pressure equals the gas pressure plus water vapor pressure.\n   \u2022 P_gas = P_total - P_H\u2082O\n   \u2022 This is essential for accurate volume calculations.\n\n2. Atmospheric Composition:\n   \u2022 Air pressure = P_N\u2082 + P_O\u2082 + P_Ar + P_CO\u2082 + ...\n   \u2022 Helps predict behavior at high altitudes.\n\n3. Gas Diffusion and Effusion:\n   \u2022 Used to determine individual gas diffusion rates in mixtures.",
    "explanation": "This law is fundamental in gas calculations, especially when gases are collected over water or when dealing with gas mixtures in various chemical processes."
  },
  {
    "id": 29,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "hard",
    "question": "How did Charles's Law lead to the development of absolute temperature scale?",
    "marks": 2,
    "answer": "Charles's Law and Absolute Temperature Scale:\n\nCharles's Law:\n\u2022 V \u221d T (at constant pressure and volume)\n\u2022 Or: V/T = constant\n\u2022 When plotted, V vs T (in \u00b0C) gives a straight line that intersects the x-axis.\n\nDevelopment of Absolute Temperature:\n\n1. Extrapolation of Charles's Law:\n   \u2022 When gas volume is plotted against temperature (in Celsius), the line extrapolates to zero volume at -273.15\u00b0C.\n   \u2022 Beyond this point, the relationship breaks down (gases liquefy before reaching this temperature).\n\n2. Logical Conclusion:\n   \u2022 If volume becomes zero at -273.15\u00b0C, this represents the lowest possible temperature.\n   \u2022 All molecular motion would theoretically stop at this point.\n   \u2022 This temperature was named as Absolute Zero.\n\n3. Kelvin Scale:\n   \u2022 Lord Kelvin proposed a new temperature scale starting from Absolute Zero.\n   \u2022 T(K) = T(\u00b0C) + 273.15\n   \u2022 This creates a scale where all temperatures are positive.\n\n4. Mathematical Relationships:\n   \u2022 Using Kelvin scale, Charles's Law becomes: V = kT (where k is a constant)\n   \u2022 This makes the relationship directly proportional without the intercept problem.\n\nSignificance:\n\u2022 The absolute scale eliminates negative temperatures in gas calculations.\n\u2022 All gas laws become simpler when using Kelvin scale.\n\u2022 The concept of absolute zero became a fundamental principle in thermodynamics.",
    "explanation": "This historical development shows how experimental observations and mathematical relationships can lead to fundamental discoveries about nature and the establishment of new measurement scales."
  },
  {
    "id": 30,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "hard",
    "question": "A saturated hydrocarbon (C\u2099H\u2082\u2099\u208a\u2082) diffuses through a porous membrane twice as fast as sulphur dioxide. Determine the molecular formula of the hydrocarbon.",
    "marks": 3,
    "answer": "Solution using Graham's Law of Effusion:\n\nGrahams's Law:\n\u2022 r\u2081/r\u2082 = \u221a(M\u2082/M\u2081)\n\u2022 Where r is rate of diffusion and M is molar mass\n\nGiven Information:\n\u2022 Hydrocarbon: C\u2099H\u2082\u2099\u208a\u2082 (saturated alkane)\n\u2022 Sulphur dioxide (SO\u2082): M = 32 + 2(16) = 64 g/mol\n\u2022 Rate ratio: r_hydrocarbon / r_SO\u2082 = 2\n\nCalculation:\nr_HC / r_SO\u2082 = \u221a(M_SO\u2082 / M_HC)\n\n2 = \u221a(64 / M_HC)\n\n4 = 64 / M_HC\n\nM_HC = 64/4 = 16 g/mol\n\nFinding Molecular Formula:\nFor C\u2099H\u2082\u2099\u208a\u2082:\nMolar mass = 12n + 1(2n + 2) = 12n + 2n + 2 = 14n + 2\n\n14n + 2 = 16\n14n = 14\nn = 1\n\nMolecular Formula:\nC\u2081H\u2082\u208a\u2082 = CH\u2084 (Methane)\n\nVerification:\n\u2022 Molar mass of CH\u2084 = 12 + 4 = 16 g/mol \u2713\n\u2022 Diffusion rate ratio = \u221a(64/16) = \u221a4 = 2 \u2713",
    "explanation": "This problem combines Graham's Law with stoichiometry. It demonstrates how diffusion rates can be used to determine molecular masses and hence molecular formulas of unknown compounds."
  },
  {
    "id": 31,
    "type": "short_question",
    "category": "Stoichiometry",
    "difficulty": "hard",
    "question": "A mixture of ozone and oxygen containing 20% by volume of ozone diffuses through a porous plug in 172 seconds, while the same volume of pure oxygen takes 164 seconds to diffuse through the same plug. Calculate the relative density of ozone.",
    "marks": 3,
    "answer": "Solution using Graham's Law and Gas Mixture:\n\nGiven Information:\n\u2022 Mixture: 20% O\u2083 + 80% O\u2082\n\u2022 Time for mixture: t_mix = 172 s\n\u2022 Time for pure O\u2082: t_O\u2082 = 164 s\n\u2022 Molar mass of O\u2082 = 32 g/mol\n\nStep 1: Find Average Molar Mass of Mixture\n\u2022 Mole fraction of O\u2083: x\u2081 = 0.20\n\u2022 Mole fraction of O\u2082: x\u2082 = 0.80\n\u2022 Let molar mass of O\u2083 = M_O\u2083\n\nM_mix = 0.20 \u00d7 M_O\u2083 + 0.80 \u00d7 32\nM_mix = 0.20M_O\u2083 + 25.6\n\nStep 2: Apply Graham's Law\n\u2022 Rate \u221d 1/time (for same volume)\n\u2022 r_O\u2082/r_mix = t_mix/t_O\u2082\n\u2022 r_O\u2082/r_mix = 172/164 = 1.0488\n\nStep 3: Use Graham's Law Formula\nr_O\u2082/r_mix = \u221a(M_mix/M_O\u2082)\n\n1.0488 = \u221a(M_mix/32)\n\n1.0999 = M_mix/32\n\nM_mix = 35.197 g/mol\n\nStep 4: Calculate Molar Mass of O\u2083\n0.20M_O\u2083 + 25.6 = 35.197\n\n0.20M_O\u2083 = 9.597\n\nM_O\u2083 = 47.985 \u2248 48 g/mol\n\nStep 5: Calculate Relative Density\nRelative density of O\u2083 = M_O\u2083/M_H\u2082\n= 48/2 = 24\n\nOr relative to air (average molar mass = 29):\n= 48/29 = 1.66\n\nNote: The true molar mass of O\u2083 is 48 g/mol, confirming our calculation.",
    "explanation": "This problem combines diffusion rates with gas mixture calculations, requiring understanding of both Graham's Law and partial pressures."
  },
  {
    "id": 32,
    "type": "short_question",
    "category": "Chemical Equilibrium",
    "difficulty": "medium",
    "question": "State the Law of Mass Action and derive its expression.",
    "marks": 3,
    "answer": "Law of Mass Action:\n\nStatement:\n\"The rate of a chemical reaction is directly proportional to the product of the concentrations of the reactants, each raised to the power of their stoichiometric coefficients.\"\n\nFor a reaction: aA + bB \u21cc cC + dD\n\nForward rate: r_f = k_f [A]\u1d43 [B]\u1d47\nBackward rate: r_b = k_b [C]\u1d9c [D]\u1d48\n\nDerivation:\n\nStep 1: Mechanism Basis\n\u2022 The reaction rate depends on the concentration of reactants.\n\u2022 Higher concentration means more frequent collisions.\n\u2022 Collision frequency \u221d concentration of each reactant.\n\nStep 2: For Elementary Reaction:\n\u2022 Consider: aA + bB \u2192 cC + dD\n\u2022 Number of A molecules involved = a\n\u2022 Number of B molecules involved = b\n\u2022 Probability of collision = [A]\u1d43 \u00d7 [B]\u1d47\n\nStep 3: Rate Expression:\n\u2022 Rate = k \u00d7 (collision probability)\n\u2022 Rate = k[A]\u1d43[B]\u1d47\n\u2022 k is the rate constant (depends on temperature)\n\nStep 4: At Equilibrium:\n\u2022 r_f = r_b\n\u2022 k_f [A]\u1d43 [B]\u1d47 = k_b [C]\u1d9c [D]\u1d48\n\u2022 k_f/k_b = [C]\u1d9c [D]\u1d48 / [A]\u1d43 [B]\u1d47\n\u2022 K = [C]\u1d9c [D]\u1d48 / [A]\u1d43 [B]\u1d47\n\nApplications:\n\u2022 Determining reaction orders\n\u2022 Calculating equilibrium constants\n\u2022 Predicting reaction rates at different concentrations",
    "explanation": "The Law of Mass Action is fundamental to chemical kinetics and equilibrium. It provides the mathematical basis for understanding how reactions proceed and reach equilibrium."
  },
  {
    "id": 33,
    "type": "short_question",
    "category": "Nitrogen Chemistry",
    "difficulty": "hard",
    "question": "Mention the proper conditions for maximum yield of NO in the reaction: N\u2082(g) + O\u2082(g) \u21cc 2NO(g) \u0394H = +ve [2]",
    "marks": 2,
    "answer": "Conditions for Maximum Yield of NO:\n\n1. Temperature:\n   \u2022 High temperature (around 1200-1500\u00b0C)\n   \u2022 Since \u0394H = +ve (endothermic), increasing temperature shifts equilibrium to the right (Le Chatelier's principle)\n   \u2022 Higher temperature provides more energy for bond breaking\n   \u2022 At higher temperatures, more NO is formed\n\n2. Pressure:\n   \u2022 Low pressure or atmospheric pressure\n   \u2022 The reaction: N\u2082 + O\u2082 \u21cc 2NO has \u0394n = 2 - 2 = 0\n   \u2022 No. of moles don't change, so pressure doesn't shift equilibrium\n   \u2022 However, lower pressure is preferred to avoid reverse reaction\n\n3. Catalyst:\n   \u2022 Use of catalyst (not applicable here as N\u2082 is very stable)\n   \u2022 Or use of Pt or other catalysts at high temperature\n\n4. Contact Time:\n   \u2022 Adequate contact time between N\u2082 and O\u2082\n\n5. Concentration:\n   \u2022 High concentration of O\u2082 and N\u2082\n   \u2022 Increases forward reaction rate\n\nOptimal Conditions:\n\u2022 Temperature: 1200-1500\u00b0C\n\u2022 Pressure: 1 atm (atmospheric)\n\u2022 Ratio N\u2082:O\u2082 \u2248 1:1 (present in air)\n\u2022 Residence time: Adequate for reaction completion\n\nNote: Despite these conditions, the equilibrium yield of NO is still relatively low at these temperatures.",
    "explanation": "This shows how Le Chatelier's principle can be applied to maximize product formation in reversible reactions."
  },
  {
    "id": 34,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define electrophile and nucleophile with examples.",
    "marks": 2,
    "answer": "Electrophile and Nucleophile:\n\nElectrophile:\nDefinition: An electron-deficient species that seeks to accept electrons. It is attracted to regions of high electron density.\n\nCharacteristics:\n\u2022 Positively charged or has vacant orbitals\n\u2022 Electron-deficient\n\u2022 Lewis acid\n\nExamples:\n\u2022 H\u207a (Hydrogen ion) - highly electron deficient\n\u2022 C\u00b2 in carbocations (R\u2083C\u207a)\n\u2022 AlCl\u2083 (Aluminum trichloride) - incomplete octet\n\u2022 BF\u2083 (Boron trifluoride) - empty p orbital\n\u2022 NO\u2082\u207a (Nitronium ion)\n\u2022 Cr\u00b3\u207a, Fe\u00b3\u207a (Metal cations)\n\nNucleophile:\nDefinition: An electron-rich species that donates electrons to form bonds. It is attracted to electron-deficient centers.\n\nCharacteristics:\n\u2022 Negatively charged or has lone pairs\n\u2022 Electron-rich\n\u2022 Lewis base\n\nExamples:\n\u2022 OH\u207b (Hydroxide ion) - has lone pairs\n\u2022 CN\u207b (Cyanide ion) - has lone pairs on C\n\u2022 H\u2082O (Water) - oxygen has lone pairs\n\u2022 NH\u2083 (Ammonia) - nitrogen has lone pair\n\u2022 Alkenes - \u03c0 electrons act as nucleophiles\n\u2022 Br\u207b, Cl\u207b (Halide ions) - have lone pairs\n\nReaction:\n\u2022 Nucleophile attacks electrophile\n\u2022 Forms new bond: Nu: + E\u207a \u2192 Nu-E",
    "explanation": "Understanding electrophiles and nucleophiles is central to predicting organic reaction mechanisms and reactivity patterns."
  },
  {
    "id": 35,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define octane number. What is gasoline additive?",
    "marks": 2,
    "answer": "Octane Number:\n\nDefinition:\n\"Octane number is a measure of the ability of gasoline to resist knocking in an internal combustion engine. It is expressed on a scale from 0 to 100, where 100 represents pure isooctane and 0 represents pure n-heptane.\"\n\nExplanation:\n\u2022 Knocking occurs when fuel ignites prematurely (before the piston reaches the proper position)\n\u2022 This causes loss of power and engine damage\n\u2022 Higher octane number = better resistance to knocking\n\u2022 Octane rating indicates the percentage of isooctane (2,2,4-trimethylpentane) in a mixture\n  - 95 octane fuel = 95% isooctane + 5% n-heptane equivalent\n\nFactors Affecting Octane Number:\n\u2022 Structural isomers: branched hydrocarbons have higher octane numbers\n\u2022 Degree of unsaturation: aromatic compounds have higher octane numbers\n\u2022 Molecular weight: higher molecular weight generally correlates with higher octane\n\nGasoline Additives:\n\nDefinition: Substances added to gasoline to improve its performance and properties.\n\nCommon Types:\n\n1. Anti-Knock Agents (Octane Boosters):\n   \u2022 Tetraethyl lead (TEL) - now phased out\n   \u2022 Methyl tert-butyl ether (MTBE)\n   \u2022 Ethanol (C\u2082H\u2085OH)\n   \u2022 Purpose: Increase octane number\n\n2. Anti-oxidants:\n   \u2022 Phenolic compounds\n   \u2022 Purpose: Prevent gum formation and oxidation\n\n3. Metal Deactivators:\n   \u2022 N,N'-disalicylidene-1,2-propanediamine\n   \u2022 Purpose: Prevent metal-catalyzed oxidation\n\n4. Corrosion Inhibitors:\n   \u2022 Protective films on fuel system components\n\n5. Static Dissipator Additives (SDA):\n   \u2022 Improve electrical conductivity\n\n6. Biocides:\n   \u2022 Prevent microbial growth in fuel tanks",
    "explanation": "Octane rating is crucial for engine performance, and additives are essential for maintaining fuel quality and engine efficiency."
  },
  {
    "id": 36,
    "type": "short_question",
    "category": "Qualitative Analysis",
    "difficulty": "medium",
    "question": "Why is sodium extract solution boiled with dilute HNO\u2083 before halogen test during detection of hetero elements?",
    "marks": 1,
    "answer": "Reason for Boiling with Dilute HNO\u2083:\n\n1. Removal of Excess Sodium:\n   \u2022 When organic compound containing halogens is fused with sodium metal, excess sodium remains.\n   \u2022 Sodium reacts with water: 2Na + 2H\u2082O \u2192 2NaOH + H\u2082\u2191\n   \u2022 This makes the solution strongly alkaline.\n\n2. Conversion to Correct Form:\n   \u2022 Dilute HNO\u2083 neutralizes excess NaOH\n   \u2022 NaOH + HNO\u2083 \u2192 NaNO\u2083 + H\u2082O\n   \u2022 Brings pH to slightly acidic (pH \u2248 5-6)\n   \u2022 Correct pH for halogen test\n\n3. Oxidation of Reducing Agents:\n   \u2022 Any reducing impurities (like CN\u207b from nitrogen) are oxidized\n   \u2022 HNO\u2083 oxidizes CN\u207b to CO\u2082 and NO\u2082\n   \u2022 3CN\u207b + 4HNO\u2083 \u2192 3CO\u2082 + NO\u2191 + 2H\u2082O + 3NO\u2083\u207b\n   \u2022 Prevents false positive reactions\n\n4. Conversion of Halide Ions:\n   \u2022 Halide ions (X\u207b) are converted to their most reactive form\n   \u2022 Ensures proper precipitation with AgNO\u2083\n\n5. Removal of Sulfide:\n   \u2022 If sulfur is present (as S\u00b2\u207b from sulfur fusion), it's oxidized to SO\u2084\u00b2\u207b\n   \u2022 Prevents interference with halogen test\n   \u2022 S\u00b2\u207b + 2HNO\u2083 \u2192 H\u2082SO\u2084 + 2NO\u2082\n\nHalogen Test:\nAfter treatment, add AgNO\u2083:\n\u2022 If Cl\u207b: white precipitate of AgCl\n\u2022 If Br\u207b: pale yellow precipitate of AgBr\n\u2022 If I\u207b: yellow precipitate of AgI",
    "explanation": "This procedure ensures reliable and specific detection of halogens by removing interfering substances and maintaining proper reaction conditions."
  },
  {
    "id": 37,
    "type": "short_question",
    "category": "Periodic Table",
    "difficulty": "medium",
    "question": "What are the advantages of the modern periodic table?",
    "marks": 2,
    "answer": "Advantages of Modern Periodic Table:\n\n1. Based on Atomic Number:\n   \u2022 Arranged by increasing atomic number (not atomic mass like Mendeleev's)\n   \u2022 More scientifically accurate\n   \u2022 Removes anomalies (e.g., Ar and K placement)\n\n2. Explains Electronic Configuration:\n   \u2022 Reflects electron arrangement in atoms\n   \u2022 Helps predict valence and bonding behavior\n   \u2022 Shows periodic trends\n\n3. Accommodates Isotopes:\n   \u2022 Elements with same atomic number but different mass numbers have same position\n   \u2022 Reflects true chemical similarity\n\n4. Placement of All Elements:\n   \u2022 Includes all known elements up to Z = 118\n   \u2022 Provides room for new elements\n\n5. Better Organization:\n   \u2022 s, p, d, f blocks show orbital types\n   \u2022 Clear grouping of similar elements\n   \u2022 Lanthanides and Actinides properly placed\n\n6. Predictive Power:\n   \u2022 Can predict properties of undiscovered elements\n   \u2022 Shows periodic trends:\n     - Ionization energy\n     - Electronegativity\n     - Atomic radius\n     - Metallic character\n\n7. Chemical Behavior:\n   \u2022 Groups (vertical columns) show similar chemical properties\n   \u2022 Explains formation of ions and compounds\n\n8. Eliminates Inconsistencies:\n   \u2022 Removes problems from Mendeleev's table\n   \u2022 All elements fit logically\n\n9. Universal Acceptance:\n   \u2022 Adopted internationally as standard\n   \u2022 Used in all scientific communications",
    "explanation": "The modern periodic table is based on sound quantum mechanical principles and provides a comprehensive framework for understanding chemistry."
  },
  {
    "id": 38,
    "type": "short_question",
    "category": "Periodic Table",
    "difficulty": "medium",
    "question": "Explain ionic radius and covalent radius with suitable examples.",
    "marks": 2,
    "answer": "Ionic Radius and Covalent Radius:\n\nIonic Radius:\nDefinition: The effective radius of an ion in an ionic compound. It is the distance from the nucleus to the outermost electron in an ionized atom.\n\nCharacteristics:\n\u2022 Smaller than covalent radius for metal cations\n\u2022 Larger than atomic radius for anions\n\u2022 Depends on:\n  - Nuclear charge (more protons \u2192 smaller radius)\n  - Number of electrons (more electrons \u2192 larger radius)\n  - Charge of ion (more positive charge \u2192 smaller radius)\n\nExamples:\n\u2022 Na (metallic radius = 186 pm) \u2192 Na\u207a (ionic radius = 95 pm) [reduced]\n\u2022 Cl (covalent radius \u2248 102 pm) \u2192 Cl\u207b (ionic radius = 181 pm) [increased]\n\u2022 Fe\u00b2\u207a = 76 pm vs Fe\u00b3\u207a = 64 pm [Fe\u00b3\u207a is smaller]\n\u2022 N\u00b3\u207b = 146 pm (large due to 3 extra electrons)\n\nCovalent Radius:\nDefinition: Half of the distance between the nuclei of two atoms bonded by a single covalent bond.\n\nCharacteristics:\n\u2022 Approximately half the bond length\n\u2022 Relatively constant for an atom in different molecules\n\u2022 Depends on:\n  - Degree of overlap between orbitals\n  - Type of bond (single > double > triple)\n  - Nature of bonded atoms\n\nCalculation:\nCovalent radius = Bond length / 2\n\nExamples:\n\u2022 H-H bond length = 74 pm \u2192 H covalent radius = 37 pm\n\u2022 C-C bond length = 154 pm \u2192 C covalent radius = 77 pm\n\u2022 C=C bond length = 134 pm \u2192 effective C radius in double bond\n\u2022 Si covalent radius \u2248 110 pm (larger than C, 77 pm)\n\nComparison:\n| Aspect | Ionic Radius | Covalent Radius |\n|--------|-------------|----------------|\n| Definition | Distance in ionic compound | Half of single bond length |\n| Nature | For ions | For neutral atoms |\n| Variability | Depends on charge | Relatively constant |\n| Example | Na\u207a = 95 pm | Na = 154 pm |",
    "explanation": "Understanding these radii helps explain periodic trends, bond properties, and reactivity patterns."
  },
  {
    "id": 39,
    "type": "short_question",
    "category": "Periodic Properties",
    "difficulty": "easy",
    "question": "What are the factors affecting electronegativity?",
    "marks": 1,
    "answer": "Factors Affecting Electronegativity:\n\n1. Atomic Number (Nuclear Charge):\n   \u2022 Higher nuclear charge \u2192 higher electronegativity\n   \u2022 More protons attract electron pairs more strongly\n   \u2022 Example: F (En = 4.0) > Cl (En = 3.0) > Br (En = 2.8)\n\n2. Atomic Radius:\n   \u2022 Smaller atomic radius \u2192 higher electronegativity\n   \u2022 Electrons are closer to nucleus, experience stronger attraction\n   \u2022 Example: N (small, En = 3.0) > P (larger, En = 2.1)\n\n3. Number of Valence Electrons:\n   \u2022 More valence electrons \u2192 higher electronegativity\n   \u2022 Halogens (7 valence e\u207b) more electronegative than alkali metals (1 valence e\u207b)\n   \u2022 Example: F (En = 4.0) > Na (En = 0.93)\n\n4. Shielding Effect:\n   \u2022 More inner shells \u2192 lower electronegativity\n   \u2022 Inner electrons reduce nuclear attraction on valence electrons\n   \u2022 Example: C (En = 2.5) > Si (En = 1.9)\n\n5. Oxidation State:\n   \u2022 Higher oxidation state \u2192 higher electronegativity\n   \u2022 More positive charge increases electron-pulling ability\n   \u2022 Example: Mn\u00b2\u207a vs Mn\u2077\u207a (in MnO\u2084\u207b)\n\n6. Type of Hybrid Orbitals:\n   \u2022 s-character influence: sp > sp\u00b2 > sp\u00b3\n   \u2022 Higher s-character \u2192 higher electronegativity\n   \u2022 Example: C(sp) > C(sp\u00b2) > C(sp\u00b3)\n\n7. Electronegativity Trend:\n   \u2022 Increases across a period (left to right)\n   \u2022 Decreases down a group (top to bottom)\n   \u2022 Highest: Fluorine (F = 4.0)\n   \u2022 Lowest: Francium (Fr \u2248 0.7)",
    "explanation": "Electronegativity is a crucial property for predicting bond polarity and chemical reactivity."
  },
  {
    "id": 40,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define optical isomerism with example.",
    "marks": 2,
    "answer": "Optical Isomerism:\n\nDefinition:\n\"Optical isomerism is a type of stereoisomerism where two isomers have the same molecular formula and functional groups but differ in their spatial arrangement around a chiral center (stereogenic center), resulting in non-superimposable mirror images (enantiomers).\"\n\nKey Features:\n\n1. Stereoisomerism Type:\n   \u2022 Not constitutional isomers (same connectivity)\n   \u2022 Spatial arrangement differs\n   \u2022 Cannot interconvert without breaking bonds\n\n2. Chiral Center (Stereogenic Center):\n   \u2022 Carbon with four different groups attached\n   \u2022 Creates two non-superimposable mirror images\n   \u2022 Designated as R or S configuration\n\n3. Enantiomers:\n   \u2022 Non-superimposable mirror images\n   \u2022 Identical physical and chemical properties (mostly)\n   \u2022 Different rotation of polarized light\n   \u2022 One rotates light clockwise (+/d-form), other counterclockwise (-/l-form)\n\nExamples:\n\n1. Lactic Acid (CH\u2083-CHOH-COOH):\n   \u2022 Chiral center at carbon with OH\n   \u2022 Has D- and L-forms (enantiomers)\n   \u2022 Identical chemical structure, mirror images\n\n2. Alanine (Amino Acid):\n   \u2022 Central carbon bonded to: NH\u2082, COOH, CH\u2083, H\n   \u2022 Forms D-alanine and L-alanine\n   \u2022 Only L-alanine occurs in nature\n\n3. Glyceraldehyde (CHO-CHOH-CH\u2082OH):\n   \u2022 Has one chiral center\n   \u2022 Forms D-(+)-glyceraldehyde and L-(-)-glyceraldehyde\n   \u2022 Used as reference for stereochemistry\n\n4. 2-Butanol (CH\u2083-CHOH-CH\u2082CH\u2083):\n   \u2022 One chiral center at second carbon\n   \u2022 Two enantiomers possible\n   \u2022 (R)- and (S)- configurations\n\nNotation:\n\u2022 D/L notation: Based on reference (glyceraldehyde)\n\u2022 (+)/(\u2212) notation: Based on direction of optical rotation\n\u2022 R/S notation: Based on Cahn-Ingold-Prelog rules (modern)\n\nBiological Significance:\n\u2022 Most amino acids are L-forms in nature\n\u2022 Enzymes are chiral and recognize only one enantiomer\n\u2022 Pharmaceutical importance: one enantiomer may be therapeutic, other harmful",
    "explanation": "Optical isomerism is crucial in biochemistry and pharmacology, where stereochemistry determines biological activity."
  },
  {
    "id": 41,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "hard",
    "question": "Write possible isomers of C\u2085H\u2081\u2084 and give their IUPAC names.",
    "marks": 3,
    "answer": "Isomers of C\u2085H\u2081\u2084 (Pentane):\n\nC\u2085H\u2081\u2084 is a saturated hydrocarbon with 5 carbon atoms. Since it's saturated with no rings or double bonds specified, these are structural isomers (chain isomers).\n\nTotal number of isomers: 3\n\n1. n-Pentane (Straight Chain):\n   CH\u2083-CH\u2082-CH\u2082-CH\u2082-CH\u2083\n   \u2022 IUPAC name: Pentane\n   \u2022 Structure: Linear, unbranched\n   \u2022 Boiling point: 36.1\u00b0C\n   \u2022 Molecular formula: C\u2085H\u2081\u2082\n\n   Wait - C\u2085H\u2081\u2084 is not a valid alkane formula!\n   \u2022 For saturated alkanes: C\u2099H\u2082\u2099\u208a\u2082\n   \u2022 For n=5: C\u2085H\u2081\u2082 (not C\u2085H\u2081\u2084)\n   \nRechecking: If the question meant C\u2085H\u2081\u2082:\n\n1. n-Pentane (Pentane):\n   CH\u2083-CH\u2082-CH\u2082-CH\u2082-CH\u2083\n   \u2022 IUPAC name: Pentane\n   \u2022 Straight chain\n\n2. Isopentane (2-Methylbutane):\n        CH\u2083\n        |\n   CH\u2083-CH-CH\u2082-CH\u2083\n   \u2022 IUPAC name: 2-Methylbutane\n   \u2022 Branched at 2nd carbon\n   \u2022 Also called isopentane\n\n3. Neopentane (2,2-Dimethylpropane):\n          CH\u2083\n          |\n   CH\u2083-C-CH\u2083\n          |\n          CH\u2083\n   \u2022 IUPAC name: 2,2-Dimethylpropane\n   \u2022 Central quaternary carbon\n   \u2022 Most compact structure\n   \u2022 Boiling point: 9.5\u00b0C (lowest)\n\nIf C\u2085H\u2081\u2084 was intended (not a valid alkane):\nThe question likely contains a typo. C\u2085H\u2081\u2084 would require the addition of 2H atoms to C\u2085H\u2081\u2082, which is not chemically valid for standard organic molecules.\n\nProperties of C\u2085H\u2081\u2082 Isomers:\n| Isomer | BP (\u00b0C) | Density | Use |\n|--------|---------|---------|-----|\n| n-Pentane | 36.1 | 0.626 | Solvent |\n| 2-Methylbutane | 27.8 | 0.620 | Fuel |\n| 2,2-Dimethylpropane | 9.5 | 0.614 | Refrigerant |",
    "explanation": "This exercise demonstrates how structural isomers have different physical properties despite having the same molecular formula."
  },
  {
    "id": 42,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define homologous series and write its characteristics.",
    "marks": 2,
    "answer": "Homologous Series:\n\nDefinition:\n\"A homologous series is a group of compounds with similar chemical properties that differ by one or more CH\u2082 units and form a series in which successive members have the same general formula.\"\n\nCharacteristics:\n\n1. Molecular Formula Relationship:\n   \u2022 Each member differs from the next by CH\u2082 (or C\u2093H\u2093\u208a\u2082 for alkanes)\n   \u2022 General formula: C\u2099H\u2082\u2099\u208a\u2082 for alkanes\n   \u2022 Example: CH\u2084, C\u2082H\u2086, C\u2083H\u2088, C\u2084H\u2081\u2080...\n\n2. Same Functional Group:\n   \u2022 All members contain the same functional group\n   \u2022 Example: -OH in alcohols, -COOH in carboxylic acids\n   \u2022 Determines the type of reactions they undergo\n\n3. Similar Chemical Properties:\n   \u2022 Members show similar reactions and properties\n   \u2022 Trends in chemical reactivity are predictable\n   \u2022 Example: All alcohols show -OH reactions\n\n4. Gradual Change in Physical Properties:\n   \u2022 Boiling point increases gradually\n   \u2022 Melting point increases gradually\n   \u2022 Solubility changes in a predictable manner\n   \u2022 Density increases gradually\n   \u2022 Example for alkanes:\n     - CH\u2084: -162\u00b0C | C\u2082H\u2086: -89\u00b0C | C\u2083H\u2088: -42\u00b0C | C\u2084H\u2081\u2080: -1\u00b0C\n\n5. Same Degree of Unsaturation:\n   \u2022 Members can have different numbers of C=C or rings\n   \u2022 But degree of unsaturation follows pattern\n\n6. Preparation Method:\n   \u2022 Lower members can be prepared from higher members\n   \u2022 Or can be synthesized through similar methods\n\n7. Can be Represented by General Formula:\n   \u2022 Single general formula represents all members\n   \u2022 Alkanes: C\u2099H\u2082\u2099\u208a\u2082\n   \u2022 Alcohols: C\u2099H\u2082\u2099\u208a\u2082O\n   \u2022 Carboxylic acids: C\u2099H\u2082\u2099O\u2082\n\nExamples of Homologous Series:\n\n1. Alkanes: CH\u2084, C\u2082H\u2086, C\u2083H\u2088 (C\u2099H\u2082\u2099\u208a\u2082)\n2. Alkenes: C\u2082H\u2084, C\u2083H\u2086, C\u2084H\u2088 (C\u2099H\u2082\u2099)\n3. Alkynes: C\u2082H\u2082, C\u2083H\u2084, C\u2084H\u2086 (C\u2099H\u2082\u2099\u208b\u2082)\n4. Alcohols: CH\u2083OH, C\u2082H\u2085OH, C\u2083H\u2087OH (C\u2099H\u2082\u2099\u208a\u2082O)\n5. Carboxylic acids: HCOOH, CH\u2083COOH, C\u2082H\u2085COOH (C\u2099H\u2082\u2099O\u2082)\n\nDifference from Isomers:\n\u2022 Homologues: Different molecular formulas, similar structure\n\u2022 Isomers: Same molecular formula, different structure\n\nSignificance:\n\u2022 Allows prediction of properties\n\u2022 Helps in systematic study of organic compounds\n\u2022 Basis for classification of organic compounds",
    "explanation": "Understanding homologous series is fundamental for systematic study of organic chemistry and predicting compound properties."
  },
  {
    "id": 43,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Write the formula and IUPAC name of: (i) Second member of aldehyde (ii) Third member of alcohol.",
    "marks": 2,
    "answer": "Formulas and IUPAC Names:\n\n(i) Second Member of Aldehyde:\n\nAldehydes have the general formula: C\u2099H\u2082\u2099O\nFirst member (n=1): Formaldehyde = HCHO = H-CHO\nSecond member (n=2): CH\u2083CHO\n\nIUPAC Name: Ethanal\nCommon Name: Acetaldehyde\n\nStructure:\n     O\n     ||\n  H\u2083C-C-H\n\nOr: CH\u2083-CHO\n\nProperties:\n\u2022 Liquid at room temperature\n\u2022 Boiling point: 20.8\u00b0C\n\u2022 Pungent odor\n\n(ii) Third Member of Alcohol:\n\nAlcohols have the general formula: C\u2099H\u2082\u2099\u208a\u2082O\nFirst member (n=1): Methanol = CH\u2083OH\nSecond member (n=2): Ethanol = C\u2082H\u2085OH\nThird member (n=3): C\u2083H\u2087OH\n\nFor C\u2083H\u2087OH, two isomers are possible:\n\na) n-Propan-1-ol (Primary alcohol):\n   CH\u2083-CH\u2082-CH\u2082-OH\n   IUPAC Name: Propan-1-ol\n   Common Name: n-Propyl alcohol\n\nb) Propan-2-ol (Secondary alcohol):\n       OH\n       |\n   CH\u2083-CH-CH\u2083\n   IUPAC Name: Propan-2-ol\n   Common Name: Isopropyl alcohol\n\nNote: When asked for 'third member of alcohol' typically the first isomer is meant:\n\n\u2192 IUPAC Name: Propan-1-ol\n\u2192 Formula: C\u2083H\u2088O or C\u2083H\u2087OH\n\u2192 Structure: CH\u2083CH\u2082CH\u2082OH\n\nProperties:\n\u2022 Colorless liquid\n\u2022 Boiling point: 97\u00b0C\n\u2022 Miscible with water\n\u2022 Used as solvent",
    "explanation": "Understanding homologous series members helps systematically study organic compounds and their properties."
  },
  {
    "id": 44,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define geometrical isomerism with example.",
    "marks": 2,
    "answer": "Geometrical Isomerism:\n\nDefinition:\n\"Geometrical isomerism is a type of stereoisomerism that occurs when atoms or groups of atoms are arranged around a double bond or ring in different spatial positions, resulting in isomers with the same molecular formula and functional groups but different arrangements.\"\n\nAlso called: Cis-Trans Isomerism or E-Z Isomerism\n\nConditions for Geometrical Isomerism:\n1. Presence of a C=C double bond (most common) or ring\n2. Each carbon atom of the double bond must have two different groups/atoms attached\n3. Restricted rotation around the double bond\n4. Two or more groups in different spatial arrangements\n\nTypes:\n\n1. Cis-Trans Nomenclature:\n   \u2022 Cis: Similar groups on same side of double bond\n   \u2022 Trans: Similar groups on opposite sides of double bond\n\n2. E-Z Nomenclature (IUPAC):\n   \u2022 E (Entgegen = opposite): Priority groups on opposite sides\n   \u2022 Z (Zusammen = together): Priority groups on same side\n   \u2022 Based on Cahn-Ingold-Prelog rules\n\nExample 1: But-2-ene (CH\u2083-CH=CH-CH\u2083)\n\nCis-But-2-ene (Z-But-2-ene):\n  CH\u2083         CH\u2083\n   |           |\n   C===C\n   |           |\n   H           H\n(Both CH\u2083 groups on same side)\n\u2022 Boiling point: -8.8\u00b0C\n\u2022 Dipole moment: 0\n\u2022 Less stable (steric hindrance)\n\nTrans-But-2-ene (E-But-2-ene):\n  CH\u2083         H\n   |           |\n   C===C\n   |           |\n   H           CH\u2083\n(CH\u2083 groups on opposite sides)\n\u2022 Boiling point: 0.88\u00b0C\n\u2022 Dipole moment: 0\n\u2022 More stable (less steric hindrance)\n\nExample 2: 1,2-Dichloroethene (CHCl=CHCl)\n\nCis (Z) form:\n  Cl          Cl\n   |           |\n   C===C-H\n   |           |\n   H\n\u2022 Boiling point: 60\u00b0C\n\u2022 Polar (dipole moment \u2260 0)\n\nTrans (E) form:\n  Cl          H\n   |           |\n   C===C\n   |           |\n   H           Cl\n\u2022 Boiling point: 48\u00b0C\n\u2022 Non-polar (dipole moment = 0)\n\nExample 3: 2-Pentene (CH\u2083-CH=CH-CH\u2082-CH\u2083)\n\nCis-2-Pentene:\n  CH\u2083         CH\u2083\n   |           |\n   C===C\n   |           |\n   H           C\u2082H\u2085\n\nTrans-2-Pentene:\n  CH\u2083         H\n   |           |\n   C===C\n   |           |\n   H           C\u2082H\u2085\nOr equivalently:\n  CH\u2083         C\u2082H\u2085\n   |           |\n   C===C\n   |           |\n   C\u2082H\u2085        H\n\nDifferences from Optical Isomerism:\n| Property | Geometrical | Optical |\n|----------|------------|----------|\n| Cause | C=C or ring | Chiral center |\n| Chirality | Non-chiral | Chiral |\n| Optical rotation | No | Yes |\n| Mirror images | Not mirror images | Mirror images |\n\nBiological Importance:\n\u2022 Retinal in vision (11-cis-retinal)\n\u2022 Plant growth (cis/trans-abscisic acid)\n\u2022 Sweetness perception differs for isomers",
    "explanation": "Geometrical isomerism is important in understanding molecular structure, reactivity, and biological functions of organic compounds."
  },
  {
    "id": 45,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "easy",
    "question": "Define a functional group with example.",
    "marks": 1,
    "answer": "Functional Group:\n\nDefinition:\n\"A functional group is a specific group of atoms within a molecule that determines the characteristic chemical reactions of that molecule. It is the portion of a molecule responsible for most of its chemical properties and reactions.\"\n\nCharacteristics:\n1. Specific arrangement of atoms (usually non-metal)\n2. Same functional group undergoes similar reactions\n3. Responsible for most chemical properties\n4. Determines the chemical class of compound\n\nCommon Functional Groups:\n\n1. Hydroxyl Group (-OH):\n   \u2022 Present in: Alcohols, phenols\n   \u2022 Example: CH\u2083CH\u2082OH (ethanol)\n   \u2022 Properties: Polar, hydrogen bonding\n\n2. Carbonyl Group (C=O):\n   \u2022 Present in: Aldehydes, ketones\n   \u2022 Example: CH\u2083CHO (acetaldehyde)\n   \u2022 Properties: Highly polar, reactive\n\n3. Carboxyl Group (-COOH):\n   \u2022 Present in: Carboxylic acids\n   \u2022 Example: CH\u2083COOH (acetic acid)\n   \u2022 Properties: Acidic, hydrogen bonding\n\n4. Amino Group (-NH\u2082):\n   \u2022 Present in: Amines, amino acids\n   \u2022 Example: CH\u2083NH\u2082 (methylamine)\n   \u2022 Properties: Basic, can form hydrogen bonds\n\n5. Ether Group (R-O-R'):\n   \u2022 Present in: Ethers\n   \u2022 Example: CH\u2083OCH\u2082CH\u2083 (ethyl methyl ether)\n   \u2022 Properties: Slightly polar\n\n6. Thiol Group (-SH):\n   \u2022 Present in: Thiols\n   \u2022 Example: CH\u2083SH (methanethiol)\n   \u2022 Properties: Similar to alcohols but weaker\n\n7. Aldehyde Group (-CHO):\n   \u2022 Carbonyl at end of chain\n   \u2022 Example: CH\u2083CH\u2082CHO\n\n8. Ketone Group (C=O):\n   \u2022 Carbonyl in middle of chain\n   \u2022 Example: CH\u2083COCH\u2083 (acetone)",
    "explanation": "Functional groups are the basis for classifying organic compounds and predicting their chemical behavior."
  },
  {
    "id": 46,
    "type": "long_question",
    "category": "Stoichiometry",
    "difficulty": "hard",
    "question": "17g of ammonia is completely reacted with 45g of oxygen to produce NO and H\u2082O. (i) Which is limiting reactant and why? (ii) Calculate the number of moles of unreacted reactant left over. (iii) What volume of NO are produced at NTP? (iv) Calculate the mass of water produced.",
    "marks": 4,
    "answer": "Reaction: 4NH\u2083 + 5O\u2082 \u2192 4NO + 6H\u2082O\n\nGiven Data:\n\u2022 Mass of NH\u2083 = 17 g\n\u2022 Mass of O\u2082 = 45 g\n\u2022 Molar mass of NH\u2083 = 14 + 3 = 17 g/mol\n\u2022 Molar mass of O\u2082 = 32 g/mol\n\u2022 Molar mass of NO = 14 + 16 = 30 g/mol\n\u2022 Molar mass of H\u2082O = 18 g/mol\n\u2022 Volume of gases at NTP = 22.4 L/mol\n\nSolution:\n\n(i) Identifying Limiting Reactant:\n\nMoles of NH\u2083 = 17/17 = 1 mol\nMoles of O\u2082 = 45/32 = 1.406 mol\n\nFrom stoichiometry: 4NH\u2083 + 5O\u2082 \u2192 products\nFor 1 mol NH\u2083, required O\u2082 = (5/4) \u00d7 1 = 1.25 mol\n\nAvailable O\u2082 = 1.406 mol\nRequired O\u2082 = 1.25 mol\nSince available > required, O\u2082 is in excess.\n\nTherefore: NH\u2083 is the LIMITING REACTANT\n\nReason: NH\u2083 is present in lower quantity relative to stoichiometric requirement.\n\n(ii) Moles of Unreacted Reactant:\n\nSince NH\u2083 is limiting, O\u2082 is unreacted.\n\nO\u2082 consumed = (5/4) \u00d7 1 = 1.25 mol\nO\u2082 available = 1.406 mol\nO\u2082 unreacted = 1.406 - 1.25 = 0.156 mol\n\n(iii) Volume of NO Produced at NTP:\n\nFrom stoichiometry: 4NH\u2083 \u2192 4NO (1:1 ratio)\n\nNO produced = 1 mol (since 1 mol NH\u2083 produces 1 mol NO)\n\nVolume of NO at NTP = 1 \u00d7 22.4 = 22.4 L\n\n(iv) Mass of Water Produced:\n\nFrom stoichiometry: 4NH\u2083 \u2192 6H\u2082O\nFor 1 mol NH\u2083: moles of H\u2082O = (6/4) \u00d7 1 = 1.5 mol\n\nMass of H\u2082O = 1.5 \u00d7 18 = 27 g\n\nSummary:\n(i) Limiting reactant: NH\u2083\n(ii) Unreacted O\u2082: 0.156 mol\n(iii) Volume of NO at NTP: 22.4 L\n(iv) Mass of H\u2082O: 27 g",
    "explanation": "This comprehensive stoichiometry problem demonstrates the method for identifying limiting reactants and calculating reactant consumption and product formation based on chemical equations."
  },
  {
    "id": 47,
    "type": "long_question",
    "category": "Chemistry Extraction",
    "difficulty": "hard",
    "question": "Write a short note on extraction of sodium by Down's process.",
    "marks": 3,
    "answer": "Down's Process - Extraction of Sodium:\n\nDefinition:\nDown's process is an electrochemical method for the industrial production of metallic sodium from molten sodium chloride using electrolysis.\n\n1. Historical Background:\n   \u2022 Developed by James Baxter \"J. B.\" Down in 1923\n   \u2022 Most important industrial method for sodium production\n   \u2022 Replaces older Castner process\n\n2. Raw Material:\n   \u2022 Sodium chloride (NaCl) - rock salt or halite\n   \u2022 Abundant and relatively inexpensive\n   \u2022 Melting point of pure NaCl = 801\u00b0C\n\n3. Principle:\n   \u2022 Reduction of Na\u207a ions at cathode\n   \u2022 Oxidation of Cl\u207b ions at anode\n   \u2022 Occurs in molten state\n\n4. Electrolysis of Molten NaCl:\n\n   At Cathode (Reduction):\n   Na\u207a + e\u207b \u2192 Na\n   \n   At Anode (Oxidation):\n   2Cl\u207b - 2e\u207b \u2192 Cl\u2082\n   \n   Overall reaction:\n   2NaCl \u2192 2Na + Cl\u2082\n\n5. Cell Design:\n\n   Cathode:\n   \u2022 Liquid metallic sodium\n   \u2022 Cooled to prevent vaporization\n   \u2022 Surrounded by graphite cathode\n   \n   Anode:\n   \u2022 Graphite electrodes\n   \u2022 Produces chlorine gas\n   \n   Electrolyte:\n   \u2022 Molten NaCl (801\u00b0C)\n   \u2022 Sometimes mixed with CaCl\u2082 (lowers melting point to 600\u00b0C)\n   \u2022 Fused salt acts as electrolyte\n   \n   Separator:\n   \u2022 Asbestos diaphragm or iron gauze\n   \u2022 Separates anode and cathode\n   \u2022 Prevents mixing of Na and Cl\u2082\n\n6. Operating Conditions:\n   \u2022 Temperature: 800-850\u00b0C\n   \u2022 Voltage: 4-6 volts\n   \u2022 Current: 10,000-40,000 amperes\n   \u2022 High current density for efficiency\n\n7. Products Obtained:\n   \n   Primary Products:\n   \u2022 Sodium metal (liquid, density 0.97 g/cm\u00b3)\n   \u2022 Chlorine gas (at anode)\n   \n   Secondary Benefits:\n   \u2022 Heat generated by electrolysis\n   \u2022 Chlorine can be used in other processes\n\n8. Collection and Purification:\n   \n   Sodium Collection:\n   \u2022 Liquid sodium floats to top of cathode compartment\n   \u2022 Collected by siphoning off\n   \u2022 Cooled and solidifies\n   \u2022 Stored under mineral oil or inert atmosphere (due to reactivity)\n   \n   Chlorine Purification:\n   \u2022 Collected at anode\n   \u2022 Dried and compressed\n   \u2022 Used in chlor-alkali processes\n\n9. Advantages:\n   \u2022 Industrial-scale production\n   \u2022 Produces both Na and Cl\u2082\n   \u2022 Down's cell is more efficient than Castner process\n   \u2022 Chlorine is also useful product\n   \u2022 Economically viable\n\n10. Disadvantages:\n    \u2022 High temperature requirement (800\u00b0C)\n    \u2022 High electrical energy consumption\n    \u2022 Requires special heat-resistant materials\n    \u2022 Liquid sodium is highly reactive and dangerous\n    \u2022 Electrolyte management is complex\n    \u2022 Environmental considerations for Cl\u2082 production\n\n11. Properties of Sodium Obtained:\n    \u2022 Silvery white metal\n    \u2022 Very reactive (must be stored under mineral oil)\n    \u2022 Purity: >99.8%\n    \u2022 Used in organic synthesis, metallurgy, etc.\n\n12. Industrial Scale:\n    \u2022 Annual production: >200,000 metric tons worldwide\n    \u2022 Economically important process\n    \u2022 China, USA, and Europe are major producers\n\n13. Modern Variations:\n    \u2022 Temperature reduced by using salt mixtures\n    \u2022 Improved diaphragm materials\n    \u2022 Better heat management systems\n    \u2022 More efficient electrode designs\n\n14. Applications of Sodium:\n    \u2022 Organic synthesis (Wurtz reaction)\n    \u2022 Reduction of organic compounds\n    \u2022 Production of sodium compounds (NaOH, Na\u2082SO\u2084, etc.)\n    \u2022 Alloy production\n    \u2022 Heat transfer fluid (Na-K alloys)\n    \u2022 Nuclear reactor coolants",
    "explanation": "Down's process represents a major industrial achievement in sodium production, demonstrating the application of electrochemistry in large-scale chemical manufacturing while also providing an important byproduct (Cl\u2082)."
  },
  {
    "id": 48,
    "type": "long_question",
    "category": "Laws of Combination",
    "difficulty": "medium",
    "question": "State the law of reciprocal proportion.",
    "marks": 2,
    "answer": "Law of Reciprocal Proportion:\n\nStatement:\n\"If two elements A and B separately combine with a third element C, then the ratio of the masses of A and B that combine with a fixed mass of C is the same as the ratio of the masses of A and B that combine with each other (or the reciprocal of this ratio).\"\n\nMathematical Expression:\nIf element A combines with element C in ratio (mass of A):(mass of C) = a:c\nAnd element B combines with element C in ratio (mass of B):(mass of C) = b:c\nThen when A and B combine, the ratio will be (mass of A):(mass of B) = a:b (or b:a)\n\nExample 1: Carbon, Hydrogen, and Oxygen\n\n\u2022 In CO: 12 g C combines with 16 g O\n  \u2192 Ratio C:O = 12:16 = 3:4\n\n\u2022 In H\u2082O: 2 g H combines with 16 g O\n  \u2192 Ratio H:O = 2:16 = 1:8\n\n\u2022 In CH\u2084 (methane): C:H = 12:4 = 3:1\n\nAccording to law of reciprocal proportion:\nWhen H and C combine, their ratio should be reciprocal of (O compounds)\n\nFrom CO: C:O = 3:4 (C = 3 parts per 4 O)\nFrom H\u2082O: H:O = 1:8 (H = 1 part per 8 O)\n\nIf we want H:C in a compound:\n- C combines with 4O (as in CO)\n- H combines with 8O (as in H\u2082O)\n- So H:C = 8:4 = 2:1 (or C:H = 4:8 = 1:2 or 3:6 simplified)\n\nIn CH\u2084: C:H = 12:4 = 3:1 or H:C = 4:12 = 1:3\n\nWait, let me recalculate:\nIn CO: 12g C : 16g O (ratio for this compound)\nIn H\u2082O: 2g H : 16g O\nWhen 12g C combines (from CO), it combines with 16g O\nWhen 2g H combines (from H\u2082O), it also combines with 16g O\nSo 12g C \u2194 2g H indirectly\nTherefore, C:H = 12:2 = 6:1 (by reciprocal proportion)\nBut in actual CH\u2084: C:H = 12:4 = 3:1\n\nSo the concept works with proper understanding.\n\nExample 2: Nitrogen and Oxygen Compounds\n\n\u2022 In NO: 14 g N combines with 16 g O\n  \u2192 Ratio N:O = 14:16 = 7:8\n\n\u2022 In NO\u2082: 14 g N combines with 32 g O\n  \u2192 Ratio N:O = 14:32 = 7:16\n\n\u2022 In N\u2082O: 28 g N combines with 16 g O\n  \u2192 Ratio N:O = 28:16 = 7:4\n\nThe reciprocal relationship holds when we examine these ratios.\n\nExample 3: Copper and Oxygen Compounds\n\n\u2022 In CuO: 64 g Cu combines with 16 g O\n\u2022 In Cu\u2082O: 128 g Cu combines with 16 g O\n\nIf hydrogen combines separately:\n\u2022 In H\u2082O: 2 g H combines with 16 g O\n\nThen in copper-hydrogen compound (if it existed):\nThe ratio of Cu:H would follow the reciprocal law.\n\nSignificance:\n1. Supports atomic theory\n2. Explains how atoms combine in definite ratios\n3. Useful in determining chemical formulas\n4. Limited application compared to modern atomic theory\n\nLimitations:\n1. Only applicable to certain combinations\n2. Not applicable when elements form multiple oxides\n3. Works best when one element is common (like oxygen)\n4. Superseded by modern atomic theory\n\nRelation to Other Laws:\n\u2022 Works with Law of Definite Proportions\n\u2022 Connected to Law of Multiple Proportions\n\u2022 Based on Dalton's Atomic Theory\n\nModern Understanding:\nCan be explained through valency:\n- If Cu has valency 2 (combines with 2O atoms)\n- And O has valency 2\n- Then Cu = 64 units, O = 16 units\n- Compound CuO: 64:16 mass ratio",
    "explanation": "The law of reciprocal proportion is an important historical law that led to understanding of atomic combinations, though it has been superseded by modern atomic theory and valency concepts."
  },
  {
    "id": 49,
    "type": "long_question",
    "category": "Chemical Bonding",
    "difficulty": "hard",
    "question": "State the octet rule. Draw orbital diagrams for water to show how the octet rule is satisfied.",
    "marks": 3,
    "answer": "Octet Rule:\n\nStatement:\n\"Atoms tend to gain, lose, or share electrons so that they acquire eight electrons in their valence shell (outer electron shell), thereby achieving the electron configuration of the nearest noble gas. (For hydrogen, the goal is 2 electrons, matching helium)\"\n\nAlternative Statement:\n\"Atoms are stable when they have 8 valence electrons (or 2 for hydrogen and helium).\"\n\nHistorical Context:\n\u2022 Proposed by Lewis (1916) and Kossel\n\u2022 Part of valence bond theory\n\u2022 Explains covalent and ionic bonding\n\u2022 Foundation for Lewis structures\n\nExceptions to Octet Rule:\n1. Hydrogen and Helium: Require 2 electrons (duet rule)\n2. Boron compounds: Can have 6 electrons (e.g., BF\u2083)\n3. Sulfur and Phosphorus: Can expand octet (10-12 electrons)\n   Examples: SF\u2086, PCl\u2085\n4. Transition metals: Don't strictly follow octet rule\n\nOctet Rule and Water (H\u2082O):\n\nWater Molecule Structure:\n\u2022 Oxygen: Z = 8, electron configuration: 1s\u00b2 2s\u00b2 2p\u2074\n\u2022 Hydrogen: Z = 1, electron configuration: 1s\u00b9 (\u00d72)\n\nHow Octet Rule is Satisfied:\n\n1. Oxygen in H\u2082O:\n   \u2022 Oxygen has 6 valence electrons\n   \u2022 Needs 2 more electrons to complete octet\n   \u2022 Forms 2 covalent bonds with 2 hydrogen atoms\n   \u2022 Each O-H bond: oxygen shares 1 electron from H and contributes 1\n   \u2022 Oxygen's total valence electrons: 6 + 2(shared from H) = 8 \u2713\n\n2. Hydrogen in H\u2082O:\n   \u2022 Each H has 1 valence electron\n   \u2022 Wants 2 electrons (duet rule)\n   \u2022 Forms 1 covalent bond with oxygen\n   \u2022 Each H: 1 (own) + 1 (from O) = 2 \u2713\n\nOrbital Diagram for Water:\n\nOxygen Atom (Before bonding):\n   1s\u00b2        2s\u00b2        2p\u2074\n[\u2191\u2193]       [\u2191\u2193]     [\u2191\u2193] [\u2191] [\u2191]\n\nAfter bonding with 2 H atoms:\n   1s\u00b2        2s\u00b2        2p\u2074 (rearranged)\n[\u2191\u2193]       [\u2191\u2193]     [\u2191\u2193] [\u2191\u2193] [\u2191\u2193]\n\nWhere the paired electrons in 2p orbitals represent:\n- Two bonding pairs (O-H bonds): [\u2191\u2193] and [\u2191\u2193]\n- Two lone pairs on oxygen: [\u2191\u2193] and [\u2191\u2193]\n\nHydrogen Atoms (Before bonding):\nH\u2081: 1s\u00b9 [\u2191]\nH\u2082: 1s\u00b9 [\u2191]\n\nAfter bonding:\nH\u2081: 1s\u00b2 [\u2191\u2193] (bonding pair with O)\nH\u2082: 1s\u00b2 [\u2191\u2193] (bonding pair with O)\n\nLewis Structure of Water:\n\n         H:\u00d6:H\n          \u2191\n          (dots represent valence electrons)\n\nOr showing bonds:\n       H\u2014O\u2014H\n        ; ;\n       (: ; : ) represent lone pairs on O\n\nMore detailed representation:\n\n     H\u2014O\u2014H\n       : :\n\nWhere\n- Each dash (\u2014) represents a covalent bond (shared pair)\n- Each colon (:) or dot pair represents a lone pair\n\nValence Electron Count:\n\nOxygen:\n\u2022 Owns 2 electrons: from 2 O-H bonds (considering they orbit O orbital)\n\u2022 Exclusive ownership: 0 (all shared)\n\u2022 Half ownership of shared: 4 electrons (from 2 bonds: 1 from each)\n\u2022 Own electrons: 2 (from lone pairs)\n\u2022 Total with octet definition: 2 + 2 + 4 = 8 \u2713\n\nHydrogen (each):\n\u2022 Forms 1 bond = 2 shared electrons\n\u2022 Total: 2 \u2713 (satisfies duet rule)\n\nCross-check with Lone Pairs:\n\u2022 Oxygen: 2 lone pairs (shown as :)\n\u2022 Bonding pairs: 2 (shown as \u2014)\n\u2022 Total electron pairs around O: 4 pairs = 8 electrons \u2713\n\nMolecular Geometry:\n\u2022 4 electron pairs around O\n\u2022 2 bonding, 2 lone pairs\n\u2022 Tetrahedral electron geometry\n\u2022 Bent molecular geometry\n\u2022 Bond angle: 104.5\u00b0\n\nConclusion:\nThe octet rule is satisfied in water because:\n1. Oxygen achieves 8 valence electrons through bonding\n2. Each hydrogen achieves 2 valence electrons\n3. Both achieve noble gas configuration\n4. The molecule is stable and follows Lewis structure rules",
    "explanation": "The octet rule provides a simple framework for understanding why atoms form bonds. While it has exceptions, it remains a fundamental concept in chemistry education for explaining molecular formation and stability."
  },
  {
    "id": 50,
    "type": "mcq",
    "category": "Thermodynamics",
    "difficulty": "medium",
    "question": "Which of the following is an intensive property?",
    "options": [
      {
        "id": "A",
        "text": "Volume"
      },
      {
        "id": "B",
        "text": "Enthalpy"
      },
      {
        "id": "C",
        "text": "Temperature"
      },
      {
        "id": "D",
        "text": "Mass"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Temperature is an intensive property because it does not depend on the amount of matter present. Volume, Enthalpy, and Mass are extensive properties."
  },
  {
    "id": 51,
    "type": "mcq",
    "category": "Equilibrium",
    "difficulty": "easy",
    "question": "According to Le Chatelier's Principle, adding more reactant to a system at equilibrium will:",
    "options": [
      {
        "id": "A",
        "text": "Shift equilibrium to the left"
      },
      {
        "id": "B",
        "text": "Shift equilibrium to the right"
      },
      {
        "id": "C",
        "text": "Have no effect"
      },
      {
        "id": "D",
        "text": "Increase the equilibrium constant"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Adding reactant increases the concentration of reactants, so the system shifts to the right (towards products) to counteract the change."
  },
  {
    "id": 52,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "What is the major product of the reaction between an alkene and HBr?",
    "options": [
      {
        "id": "A",
        "text": "Markovnikov addition of HBr"
      },
      {
        "id": "B",
        "text": "Anti-Markovnikov addition of HBr"
      },
      {
        "id": "C",
        "text": "Alkane"
      },
      {
        "id": "D",
        "text": "Alcohol"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The electrophilic addition of HBr to an alkene follows Markovnikov's rule, where the hydrogen atom attaches to the carbon with more hydrogen atoms."
  },
  {
    "id": 53,
    "type": "mcq",
    "category": "Electrochemistry",
    "difficulty": "hard",
    "question": "In a galvanic cell, oxidation occurs at the:",
    "options": [
      {
        "id": "A",
        "text": "Anode"
      },
      {
        "id": "B",
        "text": "Cathode"
      },
      {
        "id": "C",
        "text": "Salt bridge"
      },
      {
        "id": "D",
        "text": "Electrolyte"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Oxidation always occurs at the anode (An Ox) and reduction at the cathode (Red Cat)."
  },
  {
    "id": 54,
    "type": "short_question",
    "category": "Periodic Table",
    "difficulty": "medium",
    "question": "Why does atomic radius decrease across a period?",
    "answer": "Across a period, the atomic number increases, meaning the number of protons and electrons increases. However, the new electrons are added to the same main energy level, so the shielding effect remains relatively constant while the effective nuclear charge increases. This pulls the electron cloud closer to the nucleus, decreasing the atomic radius.",
    "explanation": "Effective nuclear charge dominates across a period since electrons are added to the same valence shell without increasing inner shielding."
  },
  {
    "id": 55,
    "type": "short_question",
    "category": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "How does a catalyst increase the rate of a chemical reaction?",
    "answer": "A catalyst provides an alternative reaction pathway with a lower activation energy. This allows a greater proportion of reactant species to have enough energy to react, thus increasing the reaction rate.",
    "explanation": "Catalysts lower the activation energy barrier without being consumed in the reaction."
  },
  {
    "id": 56,
    "type": "mcq",
    "category": "Stoichiometry",
    "difficulty": "medium",
    "question": "If 2 moles of H2 react with 1 mole of O2 to form water, what is the limiting reactant when 4 moles of H2 and 3 moles of O2 are used?",
    "options": [
      {
        "id": "A",
        "text": "H2"
      },
      {
        "id": "B",
        "text": "O2"
      },
      {
        "id": "C",
        "text": "Both are limiting"
      },
      {
        "id": "D",
        "text": "Neither is limiting"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The balanced equation is 2H2 + O2 -> 2H2O. 4 moles of H2 require 2 moles of O2. Since 3 moles of O2 are available, oxygen is in excess and H2 is the limiting reactant."
  },
  {
    "id": 57,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "easy",
    "question": "Which of the following gases will effuse the fastest?",
    "options": [
      {
        "id": "A",
        "text": "CO2"
      },
      {
        "id": "B",
        "text": "N2"
      },
      {
        "id": "C",
        "text": "He"
      },
      {
        "id": "D",
        "text": "CH4"
      }
    ],
    "correctAnswer": "C",
    "explanation": "According to Graham's Law, rate of effusion is inversely proportional to the square root of molar mass. Helium has the lowest molar mass (4 g/mol) and will effuse fastest."
  },
  {
    "id": 58,
    "type": "short_question",
    "category": "Acids and Bases",
    "difficulty": "medium",
    "question": "What is the pH of a 0.01 M HCl solution?",
    "answer": "HCl is a strong acid and dissociates completely. [H+] = 0.01 M = 10^-2 M. pH = -log[H+] = -log(10^-2) = 2.",
    "explanation": "Strong acids fully dissociate, so the concentration of the acid equals the concentration of H+ ions."
  },
  {
    "id": 59,
    "type": "long_question",
    "category": "Organic Chemistry",
    "difficulty": "hard",
    "question": "Explain the concept of Resonance with an example.",
    "answer": "Resonance is a concept used to describe the delocalization of electrons within molecules or ions where the bonding cannot be expressed by a single Lewis structure. It occurs when multiple valid Lewis structures (resonance contributors) can be drawn. The actual structure is a resonance hybrid, an average of all contributors.\n\nExample: Benzene (C6H6) can be drawn as two different alternating single and double bonds in a hexagonal ring. The actual molecule has all carbon-carbon bonds of equal length, intermediate between a single and double bond, indicating the pi electrons are delocalized evenly around the ring.",
    "explanation": "Resonance adds stability to the molecule by delocalizing electron density."
  },
  {
    "id": 60,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "What is the molecular geometry of methan (CH4)?",
    "options": [
      {
        "id": "A",
        "text": "Linear"
      },
      {
        "id": "B",
        "text": "Trigonal Planar"
      },
      {
        "id": "C",
        "text": "Tetrahedral"
      },
      {
        "id": "D",
        "text": "Octahedral"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Methane has four bonding pairs around the central carbon atom and no lone pairs, resulting in a tetrahedral geometry with bond angles of 109.5 degrees."
  },
  {
    "id": 61,
    "type": "mcq",
    "category": "Redox Reactions",
    "difficulty": "easy",
    "question": "What is the oxidation state of sulfur in H2SO4?",
    "options": [
      {
        "id": "A",
        "text": "+2"
      },
      {
        "id": "B",
        "text": "+4"
      },
      {
        "id": "C",
        "text": "+6"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "O is -2, H is +1. Let x be oxidation state of S. 2(+1) + x + 4(-2) = 0. 2 + x - 8 = 0 => x = +6."
  },
  {
    "id": 62,
    "type": "short_question",
    "category": "Solutions",
    "difficulty": "easy",
    "question": "What is the difference between molarity and molality?",
    "answer": "Molarity is the number of moles of solute per liter of solution. Molality is the number of moles of solute per kilogram of solvent. Molarity is temperature-dependent because volume changes with temperature, while molality is temperature-independent.",
    "explanation": "Molarity uses solution volume, Molality uses solvent mass."
  },
  {
    "id": 63,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "easy",
    "question": "What functional group is represented by -COOH?",
    "options": [
      {
        "id": "A",
        "text": "Alcohol"
      },
      {
        "id": "B",
        "text": "Aldehyde"
      },
      {
        "id": "C",
        "text": "Carboxylic acid"
      },
      {
        "id": "D",
        "text": "Ketone"
      }
    ],
    "correctAnswer": "C",
    "explanation": "-COOH is the carboxyl group, which is the defining functional group for carboxylic acids."
  },
  {
    "id": 64,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "medium",
    "question": "Which quantum number determines the shape of an atomic orbital?",
    "options": [
      {
        "id": "A",
        "text": "Principal (n)"
      },
      {
        "id": "B",
        "text": "Azimuthal (l)"
      },
      {
        "id": "C",
        "text": "Magnetic (m)"
      },
      {
        "id": "D",
        "text": "Spin (s)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The azimuthal (or angular momentum) quantum number l determines the shape of the orbital, defining the subshell (s, p, d, f)."
  },
  {
    "id": 65,
    "type": "mcq",
    "category": "Thermodynamics",
    "difficulty": "medium",
    "question": "Which of the following is an intensive property?",
    "options": [
      {
        "id": "A",
        "text": "Volume"
      },
      {
        "id": "B",
        "text": "Enthalpy"
      },
      {
        "id": "C",
        "text": "Temperature"
      },
      {
        "id": "D",
        "text": "Mass"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Temperature is an intensive property because it does not depend on the amount of matter present. Volume, Enthalpy, and Mass are extensive properties."
  },
  {
    "id": 66,
    "type": "mcq",
    "category": "Equilibrium",
    "difficulty": "easy",
    "question": "According to Le Chatelier's Principle, adding more reactant to a system at equilibrium will:",
    "options": [
      {
        "id": "A",
        "text": "Shift equilibrium to the left"
      },
      {
        "id": "B",
        "text": "Shift equilibrium to the right"
      },
      {
        "id": "C",
        "text": "Have no effect"
      },
      {
        "id": "D",
        "text": "Increase the equilibrium constant"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Adding reactant increases the concentration of reactants, so the system shifts to the right (towards products) to counteract the change."
  },
  {
    "id": 67,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "What is the major product of the reaction between an alkene and HBr?",
    "options": [
      {
        "id": "A",
        "text": "Markovnikov addition of HBr"
      },
      {
        "id": "B",
        "text": "Anti-Markovnikov addition of HBr"
      },
      {
        "id": "C",
        "text": "Alkane"
      },
      {
        "id": "D",
        "text": "Alcohol"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The electrophilic addition of HBr to an alkene follows Markovnikov's rule, where the hydrogen atom attaches to the carbon with more hydrogen atoms."
  },
  {
    "id": 68,
    "type": "mcq",
    "category": "Electrochemistry",
    "difficulty": "hard",
    "question": "In a galvanic cell, oxidation occurs at the:",
    "options": [
      {
        "id": "A",
        "text": "Anode"
      },
      {
        "id": "B",
        "text": "Cathode"
      },
      {
        "id": "C",
        "text": "Salt bridge"
      },
      {
        "id": "D",
        "text": "Electrolyte"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Oxidation always occurs at the anode (An Ox) and reduction at the cathode (Red Cat)."
  },
  {
    "id": 69,
    "type": "short_question",
    "category": "Periodic Table",
    "difficulty": "medium",
    "question": "Why does atomic radius decrease across a period?",
    "answer": "Across a period, the atomic number increases, meaning the number of protons and electrons increases. However, the new electrons are added to the same main energy level, so the shielding effect remains relatively constant while the effective nuclear charge increases. This pulls the electron cloud closer to the nucleus, decreasing the atomic radius.",
    "explanation": "Effective nuclear charge dominates across a period since electrons are added to the same valence shell without increasing inner shielding."
  },
  {
    "id": 70,
    "type": "short_question",
    "category": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "How does a catalyst increase the rate of a chemical reaction?",
    "answer": "A catalyst provides an alternative reaction pathway with a lower activation energy. This allows a greater proportion of reactant species to have enough energy to react, thus increasing the reaction rate.",
    "explanation": "Catalysts lower the activation energy barrier without being consumed in the reaction."
  },
  {
    "id": 71,
    "type": "mcq",
    "category": "Stoichiometry",
    "difficulty": "medium",
    "question": "If 2 moles of H2 react with 1 mole of O2 to form water, what is the limiting reactant when 4 moles of H2 and 3 moles of O2 are used?",
    "options": [
      {
        "id": "A",
        "text": "H2"
      },
      {
        "id": "B",
        "text": "O2"
      },
      {
        "id": "C",
        "text": "Both are limiting"
      },
      {
        "id": "D",
        "text": "Neither is limiting"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The balanced equation is 2H2 + O2 -> 2H2O. 4 moles of H2 require 2 moles of O2. Since 3 moles of O2 are available, oxygen is in excess and H2 is the limiting reactant."
  },
  {
    "id": 72,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "easy",
    "question": "Which of the following gases will effuse the fastest?",
    "options": [
      {
        "id": "A",
        "text": "CO2"
      },
      {
        "id": "B",
        "text": "N2"
      },
      {
        "id": "C",
        "text": "He"
      },
      {
        "id": "D",
        "text": "CH4"
      }
    ],
    "correctAnswer": "C",
    "explanation": "According to Graham's Law, rate of effusion is inversely proportional to the square root of molar mass. Helium has the lowest molar mass (4 g/mol) and will effuse fastest."
  },
  {
    "id": 73,
    "type": "short_question",
    "category": "Acids and Bases",
    "difficulty": "medium",
    "question": "What is the pH of a 0.01 M HCl solution?",
    "answer": "HCl is a strong acid and dissociates completely. [H+] = 0.01 M = 10^-2 M. pH = -log[H+] = -log(10^-2) = 2.",
    "explanation": "Strong acids fully dissociate, so the concentration of the acid equals the concentration of H+ ions."
  },
  {
    "id": 74,
    "type": "long_question",
    "category": "Organic Chemistry",
    "difficulty": "hard",
    "question": "Explain the concept of Resonance with an example.",
    "answer": "Resonance is a concept used to describe the delocalization of electrons within molecules or ions where the bonding cannot be expressed by a single Lewis structure. It occurs when multiple valid Lewis structures (resonance contributors) can be drawn. The actual structure is a resonance hybrid, an average of all contributors.\n\nExample: Benzene (C6H6) can be drawn as two different alternating single and double bonds in a hexagonal ring. The actual molecule has all carbon-carbon bonds of equal length, intermediate between a single and double bond, indicating the pi electrons are delocalized evenly around the ring.",
    "explanation": "Resonance adds stability to the molecule by delocalizing electron density."
  },
  {
    "id": 75,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "What is the molecular geometry of methan (CH4)?",
    "options": [
      {
        "id": "A",
        "text": "Linear"
      },
      {
        "id": "B",
        "text": "Trigonal Planar"
      },
      {
        "id": "C",
        "text": "Tetrahedral"
      },
      {
        "id": "D",
        "text": "Octahedral"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Methane has four bonding pairs around the central carbon atom and no lone pairs, resulting in a tetrahedral geometry with bond angles of 109.5 degrees."
  },
  {
    "id": 76,
    "type": "mcq",
    "category": "Redox Reactions",
    "difficulty": "easy",
    "question": "What is the oxidation state of sulfur in H2SO4?",
    "options": [
      {
        "id": "A",
        "text": "+2"
      },
      {
        "id": "B",
        "text": "+4"
      },
      {
        "id": "C",
        "text": "+6"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "O is -2, H is +1. Let x be oxidation state of S. 2(+1) + x + 4(-2) = 0. 2 + x - 8 = 0 => x = +6."
  },
  {
    "id": 77,
    "type": "short_question",
    "category": "Solutions",
    "difficulty": "easy",
    "question": "What is the difference between molarity and molality?",
    "answer": "Molarity is the number of moles of solute per liter of solution. Molality is the number of moles of solute per kilogram of solvent. Molarity is temperature-dependent because volume changes with temperature, while molality is temperature-independent.",
    "explanation": "Molarity uses solution volume, Molality uses solvent mass."
  },
  {
    "id": 78,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "easy",
    "question": "What functional group is represented by -COOH?",
    "options": [
      {
        "id": "A",
        "text": "Alcohol"
      },
      {
        "id": "B",
        "text": "Aldehyde"
      },
      {
        "id": "C",
        "text": "Carboxylic acid"
      },
      {
        "id": "D",
        "text": "Ketone"
      }
    ],
    "correctAnswer": "C",
    "explanation": "-COOH is the carboxyl group, which is the defining functional group for carboxylic acids."
  },
  {
    "id": 79,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "medium",
    "question": "Which quantum number determines the shape of an atomic orbital?",
    "options": [
      {
        "id": "A",
        "text": "Principal (n)"
      },
      {
        "id": "B",
        "text": "Azimuthal (l)"
      },
      {
        "id": "C",
        "text": "Magnetic (m)"
      },
      {
        "id": "D",
        "text": "Spin (s)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The azimuthal (or angular momentum) quantum number l determines the shape of the orbital, defining the subshell (s, p, d, f)."
  },
  {
    "id": 80,
    "type": "mcq",
    "category": "Thermodynamics",
    "difficulty": "medium",
    "question": "Which of the following is an intensive property?",
    "options": [
      {
        "id": "A",
        "text": "Volume"
      },
      {
        "id": "B",
        "text": "Enthalpy"
      },
      {
        "id": "C",
        "text": "Temperature"
      },
      {
        "id": "D",
        "text": "Mass"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Temperature is an intensive property because it does not depend on the amount of matter present. Volume, Enthalpy, and Mass are extensive properties."
  },
  {
    "id": 81,
    "type": "mcq",
    "category": "Equilibrium",
    "difficulty": "easy",
    "question": "According to Le Chatelier's Principle, adding more reactant to a system at equilibrium will:",
    "options": [
      {
        "id": "A",
        "text": "Shift equilibrium to the left"
      },
      {
        "id": "B",
        "text": "Shift equilibrium to the right"
      },
      {
        "id": "C",
        "text": "Have no effect"
      },
      {
        "id": "D",
        "text": "Increase the equilibrium constant"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Adding reactant increases the concentration of reactants, so the system shifts to the right (towards products) to counteract the change."
  },
  {
    "id": 82,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "What is the major product of the reaction between an alkene and HBr?",
    "options": [
      {
        "id": "A",
        "text": "Markovnikov addition of HBr"
      },
      {
        "id": "B",
        "text": "Anti-Markovnikov addition of HBr"
      },
      {
        "id": "C",
        "text": "Alkane"
      },
      {
        "id": "D",
        "text": "Alcohol"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The electrophilic addition of HBr to an alkene follows Markovnikov's rule, where the hydrogen atom attaches to the carbon with more hydrogen atoms."
  },
  {
    "id": 83,
    "type": "mcq",
    "category": "Electrochemistry",
    "difficulty": "hard",
    "question": "In a galvanic cell, oxidation occurs at the:",
    "options": [
      {
        "id": "A",
        "text": "Anode"
      },
      {
        "id": "B",
        "text": "Cathode"
      },
      {
        "id": "C",
        "text": "Salt bridge"
      },
      {
        "id": "D",
        "text": "Electrolyte"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Oxidation always occurs at the anode (An Ox) and reduction at the cathode (Red Cat)."
  },
  {
    "id": 84,
    "type": "short_question",
    "category": "Periodic Table",
    "difficulty": "medium",
    "question": "Why does atomic radius decrease across a period?",
    "answer": "Across a period, the atomic number increases, meaning the number of protons and electrons increases. However, the new electrons are added to the same main energy level, so the shielding effect remains relatively constant while the effective nuclear charge increases. This pulls the electron cloud closer to the nucleus, decreasing the atomic radius.",
    "explanation": "Effective nuclear charge dominates across a period since electrons are added to the same valence shell without increasing inner shielding."
  },
  {
    "id": 85,
    "type": "short_question",
    "category": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "How does a catalyst increase the rate of a chemical reaction?",
    "answer": "A catalyst provides an alternative reaction pathway with a lower activation energy. This allows a greater proportion of reactant species to have enough energy to react, thus increasing the reaction rate.",
    "explanation": "Catalysts lower the activation energy barrier without being consumed in the reaction."
  },
  {
    "id": 86,
    "type": "mcq",
    "category": "Stoichiometry",
    "difficulty": "medium",
    "question": "If 2 moles of H2 react with 1 mole of O2 to form water, what is the limiting reactant when 4 moles of H2 and 3 moles of O2 are used?",
    "options": [
      {
        "id": "A",
        "text": "H2"
      },
      {
        "id": "B",
        "text": "O2"
      },
      {
        "id": "C",
        "text": "Both are limiting"
      },
      {
        "id": "D",
        "text": "Neither is limiting"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The balanced equation is 2H2 + O2 -> 2H2O. 4 moles of H2 require 2 moles of O2. Since 3 moles of O2 are available, oxygen is in excess and H2 is the limiting reactant."
  },
  {
    "id": 87,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "easy",
    "question": "Which of the following gases will effuse the fastest?",
    "options": [
      {
        "id": "A",
        "text": "CO2"
      },
      {
        "id": "B",
        "text": "N2"
      },
      {
        "id": "C",
        "text": "He"
      },
      {
        "id": "D",
        "text": "CH4"
      }
    ],
    "correctAnswer": "C",
    "explanation": "According to Graham's Law, rate of effusion is inversely proportional to the square root of molar mass. Helium has the lowest molar mass (4 g/mol) and will effuse fastest."
  },
  {
    "id": 88,
    "type": "short_question",
    "category": "Acids and Bases",
    "difficulty": "medium",
    "question": "What is the pH of a 0.01 M HCl solution?",
    "answer": "HCl is a strong acid and dissociates completely. [H+] = 0.01 M = 10^-2 M. pH = -log[H+] = -log(10^-2) = 2.",
    "explanation": "Strong acids fully dissociate, so the concentration of the acid equals the concentration of H+ ions."
  },
  {
    "id": 89,
    "type": "long_question",
    "category": "Organic Chemistry",
    "difficulty": "hard",
    "question": "Explain the concept of Resonance with an example.",
    "answer": "Resonance is a concept used to describe the delocalization of electrons within molecules or ions where the bonding cannot be expressed by a single Lewis structure. It occurs when multiple valid Lewis structures (resonance contributors) can be drawn. The actual structure is a resonance hybrid, an average of all contributors.\n\nExample: Benzene (C6H6) can be drawn as two different alternating single and double bonds in a hexagonal ring. The actual molecule has all carbon-carbon bonds of equal length, intermediate between a single and double bond, indicating the pi electrons are delocalized evenly around the ring.",
    "explanation": "Resonance adds stability to the molecule by delocalizing electron density."
  },
  {
    "id": 90,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "What is the molecular geometry of methan (CH4)?",
    "options": [
      {
        "id": "A",
        "text": "Linear"
      },
      {
        "id": "B",
        "text": "Trigonal Planar"
      },
      {
        "id": "C",
        "text": "Tetrahedral"
      },
      {
        "id": "D",
        "text": "Octahedral"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Methane has four bonding pairs around the central carbon atom and no lone pairs, resulting in a tetrahedral geometry with bond angles of 109.5 degrees."
  },
  {
    "id": 91,
    "type": "mcq",
    "category": "Redox Reactions",
    "difficulty": "easy",
    "question": "What is the oxidation state of sulfur in H2SO4?",
    "options": [
      {
        "id": "A",
        "text": "+2"
      },
      {
        "id": "B",
        "text": "+4"
      },
      {
        "id": "C",
        "text": "+6"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "O is -2, H is +1. Let x be oxidation state of S. 2(+1) + x + 4(-2) = 0. 2 + x - 8 = 0 => x = +6."
  },
  {
    "id": 92,
    "type": "short_question",
    "category": "Solutions",
    "difficulty": "easy",
    "question": "What is the difference between molarity and molality?",
    "answer": "Molarity is the number of moles of solute per liter of solution. Molality is the number of moles of solute per kilogram of solvent. Molarity is temperature-dependent because volume changes with temperature, while molality is temperature-independent.",
    "explanation": "Molarity uses solution volume, Molality uses solvent mass."
  },
  {
    "id": 93,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "easy",
    "question": "What functional group is represented by -COOH?",
    "options": [
      {
        "id": "A",
        "text": "Alcohol"
      },
      {
        "id": "B",
        "text": "Aldehyde"
      },
      {
        "id": "C",
        "text": "Carboxylic acid"
      },
      {
        "id": "D",
        "text": "Ketone"
      }
    ],
    "correctAnswer": "C",
    "explanation": "-COOH is the carboxyl group, which is the defining functional group for carboxylic acids."
  },
  {
    "id": 94,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "medium",
    "question": "Which quantum number determines the shape of an atomic orbital?",
    "options": [
      {
        "id": "A",
        "text": "Principal (n)"
      },
      {
        "id": "B",
        "text": "Azimuthal (l)"
      },
      {
        "id": "C",
        "text": "Magnetic (m)"
      },
      {
        "id": "D",
        "text": "Spin (s)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The azimuthal (or angular momentum) quantum number l determines the shape of the orbital, defining the subshell (s, p, d, f)."
  },
  {
    "id": 95,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "easy",
    "question": "Isotopes of an element have the same number of protons but different numbers of:",
    "options": [
      {
        "id": "A",
        "text": "Electrons"
      },
      {
        "id": "B",
        "text": "Neutrons"
      },
      {
        "id": "C",
        "text": "Positrons"
      },
      {
        "id": "D",
        "text": "Nuclei"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Isotopes are atoms of the same element (same number of protons) with different masses, caused by a different number of neutrons."
  },
  {
    "id": 96,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Which of the following compounds exhibits hydrogen bonding?",
    "options": [
      {
        "id": "A",
        "text": "CH4"
      },
      {
        "id": "B",
        "text": "H2S"
      },
      {
        "id": "C",
        "text": "NH3"
      },
      {
        "id": "D",
        "text": "HCl"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Hydrogen bonding occurs when H is covalently bonded to highly electronegative atoms (N, O, or F). Among the choices, only NH3 (Ammonia) has N-H bonds."
  },
  {
    "id": 97,
    "type": "short_question",
    "category": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "What is meant by the half-life of a reaction?",
    "answer": "The half-life of a reaction is the time required for the concentration of a reactant to decrease to half of its initial value.",
    "explanation": "Half-life (t1/2) is a constant value for first-order reactions, making it highly useful for radioactive dating."
  },
  {
    "id": 98,
    "type": "mcq",
    "category": "Solutions",
    "difficulty": "medium",
    "question": "According to Raoult's Law, the vapor pressure of an ideal solution is directly proportional to the:",
    "options": [
      {
        "id": "A",
        "text": "Mole fraction of solute"
      },
      {
        "id": "B",
        "text": "Volume of the solution"
      },
      {
        "id": "C",
        "text": "Mole fraction of solvent"
      },
      {
        "id": "D",
        "text": "Temperature of the solvent"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Raoult's Law states that the partial vapor pressure of each component of an ideal mixture of liquids is equal to the vapor pressure of the pure component multiplied by its mole fraction in the mixture."
  },
  {
    "id": 99,
    "type": "long_question",
    "category": "Organic Chemistry",
    "difficulty": "hard",
    "question": "Compare and contrast the SN1 and SN2 reaction mechanisms.",
    "answer": "SN1 (Substitution Nucleophilic Unimolecular) is a two-step process involving the formation of a carbocation intermediate. Its rate depends only on the substrate concentration. It favors tertiary substituted carbons, weak nucleophiles, and polar protic solvents, often resulting in racemization.\n\nSN2 (Substitution Nucleophilic Bimolecular) is a concerted, one-step process where bond breaking and forming happen simultaneously. Its rate depends on both substrate and nucleophile concentrations. It favors primary carbons, strong nucleophiles, and polar aprotic solvents, resulting in complete inversion of stereochemical configuration.",
    "explanation": "Steric hindrance heavily prevents SN2 on tertiary carbons, thus SN1 takes over by preferring stable tertiary carbocations."
  },
  {
    "id": 100,
    "type": "mcq",
    "category": "Thermodynamics",
    "difficulty": "medium",
    "question": "Which equation represents Gibbs Free Energy?",
    "options": [
      {
        "id": "A",
        "text": "\u0394G = \u0394H - T\u0394S"
      },
      {
        "id": "B",
        "text": "\u0394G = \u0394H + T\u0394S"
      },
      {
        "id": "C",
        "text": "\u0394G = T\u0394H - \u0394S"
      },
      {
        "id": "D",
        "text": "\u0394G = \u0394S - T\u0394H"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Gibbs free energy equation is \u0394G = \u0394H - T\u0394S, where H is enthalpy, T is absolute temperature, and S is entropy. A negative \u0394G indicates a spontaneous reaction."
  },
  {
    "id": 101,
    "type": "short_question",
    "category": "Equilibrium",
    "difficulty": "medium",
    "question": "What is a buffer solution?",
    "answer": "A buffer solution is an aqueous solution consisting of a mixture of a weak acid and its conjugate base, or vice versa. Its pH changes very little when a small amount of strong acid or base is added to it.",
    "explanation": "Buffers work because they contain both an acidic component to neutralize bases and a basic component to neutralize acids."
  },
  {
    "id": 102,
    "type": "mcq",
    "category": "Periodic Table",
    "difficulty": "easy",
    "question": "Which of the following elements is the most electronegative?",
    "options": [
      {
        "id": "A",
        "text": "Oxygen"
      },
      {
        "id": "B",
        "text": "Fluorine"
      },
      {
        "id": "C",
        "text": "Chlorine"
      },
      {
        "id": "D",
        "text": "Nitrogen"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fluorine is the most electronegative element on the periodic table with a Pauling electronegativity value of 4.0."
  },
  {
    "id": 103,
    "type": "mcq",
    "category": "Acids and Bases",
    "difficulty": "medium",
    "question": "A Lewis acid is defined as a substance that:",
    "options": [
      {
        "id": "A",
        "text": "Donates a proton"
      },
      {
        "id": "B",
        "text": "Accepts a proton"
      },
      {
        "id": "C",
        "text": "Donates an electron pair"
      },
      {
        "id": "D",
        "text": "Accepts an electron pair"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Under the Lewis definition, an acid is an electron-pair acceptor, and a base is an electron-pair donor."
  },
  {
    "id": 104,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "hard",
    "question": "What is the hybridization of the carbon atoms in ethyne (acetylene, C2H2)?",
    "options": [
      {
        "id": "A",
        "text": "sp3"
      },
      {
        "id": "B",
        "text": "sp2"
      },
      {
        "id": "C",
        "text": "sp"
      },
      {
        "id": "D",
        "text": "dsp2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In ethyne, there is a triple bond between the two carbon atoms. The geometry is linear, which corresponds to sp hybridization."
  },
  {
    "id": 105,
    "type": "short_question",
    "category": "Stoichiometry",
    "difficulty": "easy",
    "question": "What is the difference between an empirical formula and a molecular formula?",
    "answer": "An empirical formula gives the simplest whole-number ratio of the atoms of each element in a compound. A molecular formula gives the exact number of atoms of each element present in a molecule of the compound.",
    "explanation": "For example, the molecular formula of glucose is C6H12O6, but its empirical formula is CH2O."
  },
  {
    "id": 106,
    "type": "long_question",
    "category": "Thermodynamics",
    "difficulty": "hard",
    "question": "Explain Hess's Law and its utility in physical chemistry.",
    "answer": "Hess's Law of Constant Heat Summation states that the total enthalpy change for a chemical reaction is independent of the pathway or number of steps taken to achieve the reaction, provided the initial and final states are the same. In other words, if a reaction can be expressed as the sum of several step reactions, the standard enthalpy of the overall reaction is the sum of the standard enthalpies of the individual steps.\n\nIts utility lies in the fact that it allows the calculation of the enthalpy change of a reaction that might be difficult, dangerous, or impossible to measure directly via calorimetry. Chemists can manipulate known physical data of standard formations and combustions to yield the desired energy state.",
    "explanation": "Hess's Law is a direct consequence of the First Law of Thermodynamics, which states that energy is conserved."
  },
  {
    "id": 107,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "easy",
    "question": "What is the IUPAC name for CH3-CH2-OH?",
    "options": [
      {
        "id": "A",
        "text": "Methanol"
      },
      {
        "id": "B",
        "text": "Ethanol"
      },
      {
        "id": "C",
        "text": "Propanol"
      },
      {
        "id": "D",
        "text": "Ethanal"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A two-carbon chain (eth-) with an alcohol group (-OH) takes the suffix \"-ol\", resulting in Ethanol."
  },
  {
    "id": 108,
    "type": "mcq",
    "category": "Physical Chemistry",
    "difficulty": "medium",
    "question": "What represents the conditions under which all three phases of a substance coexist in equilibrium?",
    "options": [
      {
        "id": "A",
        "text": "Critical Point"
      },
      {
        "id": "B",
        "text": "Boiling Point"
      },
      {
        "id": "C",
        "text": "Triple Point"
      },
      {
        "id": "D",
        "text": "Melting Point"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In a phase diagram, the triple point is the specific temperature and pressure where the solid, liquid, and gas phases of a substance coexist in thermodynamic equilibrium."
  },
  {
    "id": 109,
    "type": "mcq",
    "category": "Nuclear Chemistry",
    "difficulty": "medium",
    "question": "An alpha particle is identical to the nucleus of:",
    "options": [
      {
        "id": "A",
        "text": "Hydrogen"
      },
      {
        "id": "B",
        "text": "Helium"
      },
      {
        "id": "C",
        "text": "Lithium"
      },
      {
        "id": "D",
        "text": "Beryllium"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An alpha particle consists of two protons and two neutrons, which is identical to a helium-4 nucleus."
  },
  {
    "id": 110,
    "type": "mcq",
    "category": "Environmental Chemistry",
    "difficulty": "easy",
    "question": "Which two gases are the primary contributors to acid rain?",
    "options": [
      {
        "id": "A",
        "text": "CO2 and O3"
      },
      {
        "id": "B",
        "text": "SO2 and NOx"
      },
      {
        "id": "C",
        "text": "CH4 and CFCs"
      },
      {
        "id": "D",
        "text": "N2 and O2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sulfur dioxide (SO2) and nitrogen oxides (NOx) react with water, oxygen, and other chemicals in the atmosphere to form sulfuric acid and nitric acid, falling to the ground as acid rain."
  },
  {
    "id": 111,
    "type": "short_question",
    "category": "Electrochemistry",
    "difficulty": "medium",
    "question": "State Faraday's First Law of Electrolysis.",
    "answer": "Faraday's First Law of Electrolysis states that the mass of any substance deposited or liberated at an electrode is directly proportional to the quantity of electricity (charge) passed through the electrolyte.",
    "explanation": "Expressed mathematically as m = Z * Q, where m is mass, Q is charge equivalent, and Z is the electrochemical equivalent."
  },
  {
    "id": 112,
    "type": "mcq",
    "category": "Analytical Chemistry",
    "difficulty": "medium",
    "question": "In a titration, what is the point at which the indicator changes color called?",
    "options": [
      {
        "id": "A",
        "text": "Equivalence point"
      },
      {
        "id": "B",
        "text": "Endpoint"
      },
      {
        "id": "C",
        "text": "Saturation point"
      },
      {
        "id": "D",
        "text": "Neutralization point"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The endpoint is the point where the indicator visibly changes color. The equivalence point is the theoretical point where the stoichiometric amounts of acid and base have reacted."
  },
  {
    "id": 113,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "hard",
    "question": "Under what conditions do real gases behave most like ideal gases?",
    "options": [
      {
        "id": "A",
        "text": "High temperature and high pressure"
      },
      {
        "id": "B",
        "text": "Low temperature and low pressure"
      },
      {
        "id": "C",
        "text": "High temperature and low pressure"
      },
      {
        "id": "D",
        "text": "Low temperature and high pressure"
      }
    ],
    "correctAnswer": "C",
    "explanation": "At high temperatures, molecules have high kinetic energy that overcomes intermolecular forces. At low pressures, the volume occupied by the molecules themselves becomes completely negligible relative to the total volume."
  },
  {
    "id": 114,
    "type": "short_question",
    "category": "Equilibrium",
    "difficulty": "medium",
    "question": "What does a small equilibrium constant (Keq < 1) imply about a reaction?",
    "answer": "A small equilibrium constant (Keq < 1) indicates that, at equilibrium, the concentration of the reactants is significantly higher than the concentration of the products. The reaction strongly favors the reverse direction.",
    "explanation": "This means the forward reaction does not proceed very far before equilibrium is reached."
  }
];