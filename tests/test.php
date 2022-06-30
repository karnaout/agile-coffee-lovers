<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class StackTest extends TestCase
{
    // Mock data
    // Mentee's form
    $MenteeFormSubmitted = TRUE
    $MenteeFirstName = 'John'
    $MenteeLastName = 'Rob'
    $MenteeEmail = 'johnrob@gmail.com'
    $MenteeMessage = 'I need a mentor.'

    // Mentor's form
    $MentorFormSubmitted = TRUE
    $MentorFirstName = 'Bob'
    $MentorLastName = 'Kin'
    $MentorEmail = 'bobkin@gmail.com'
    $MentorMessage = 'I wanna volunteer.'

    public function testIsWorking(): void
    {
        $this->assertSame(True, True);
    }

    public function testFormSubmitted(): void
    {
        $this->assertSame(True, $MenteeFormSubmitted);
    }

    public function testValidName(): void
    {
        $this->assertSame(True, (! empty( $MenteeFirstName ) && ! empty( $MenteeLastName ) ) );
    }

    public function testValidEmail(): void
    {
        $this->assertSame(True, (! empty( $MenteeEmail ) ) );
    }

    public function testValidMessage(): void
    {
        $this->assertSame(True, (! empty( $MenteeMessage ) ) );
    }

    // Mentor's form test
    public function testMentorFormSubmitted(): void
    {
        $this->assertSame(True, $MentorFormSubmitted);
    }

    public function testMentorValidName(): void
    {
        $this->assertSame(True, (! empty( $MentorFirstName ) && ! empty( $MentorLastName ) ) );
    }

    public function testMentorValidEmail(): void
    {
        $this->assertSame(True, (! empty( $MentorEmail ) ) );
    }

    public function testMentorValidMessage(): void
    {
        $this->assertSame(True, (! empty( $MentorMessage ) ) );
    }
}